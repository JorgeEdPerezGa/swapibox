class Helper {

  fetchData = async (url) => {
    const initialFetch = await fetch(url);
    return await initialFetch.json();
  }

  fetchSwapi = async (url, type) => {
    const initialFetch = await this.fetchData(url);
    const next = initialFetch.next;
    const previous = initialFetch.previous;

    if (type === 'people') {
      const results = await this.fetchPeople(initialFetch);
      return {results, next, previous};
    }

    if (type === 'planets') {
      const results = await this.fetchPlanets(initialFetch);
      return {results, next, previous};
    }

    if (type === 'vehicles') {
      const results = await this.fetchVehicles(initialFetch);
      return {results, next, previous};
    }
  }

  fetchPeople = (initialFetch) => {
    const people = initialFetch.results.map( async(person) => {
      const fetchSpecies = await this.fetchData(person.species);
      const fetchHomeworld = await this.fetchData(person.homeworld);
      const name = person.name;
      const birthYear = person.birth_year;
      const height = person.height;
      const mass = person.mass;
      const eyeColor = person.eye_color;
      const skinColor = person.skin_color;
      const species = fetchSpecies.name;
      const homeworld = fetchHomeworld.name;
      const homeworldPopulation = fetchHomeworld.population;
      return { name, birthYear, height, mass, eyeColor, skinColor, species, homeworld, homeworldPopulation };
    });
    return Promise.all(people);
  }

  fetchPlanets = (initialFetch) => {
    const planets = initialFetch.results.map( async(planet) => {
      const name = planet.name;
      const terrain = planet.terrain;
      const climate = planet.climate;
      const population = planet.population;
      const residents = await this.fetchResidents(planet.residents);
      return { name, terrain, climate, population, residents };
    });
    return Promise.all(planets);
  }

  fetchResidents = (initialFetch) => {
    const residents = initialFetch.map( async(fetchResidents) => {
      const resident = await this.fetchData(fetchResidents);
      return resident.name;
    });
    return Promise.all(residents);
  }

  fetchVehicles = async (initialFetch) => {
    const vehicles = initialFetch.results.map( vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const manufacturer = vehicle.manufacturer;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;
      return {name, model, manufacturer, vehicleClass, passengers};
    });
    return Promise.all(vehicles);
  }
}

export default Helper;
