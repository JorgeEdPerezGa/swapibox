class Helper {

  fetchData = async (url) => {
    try {
      const initialFetch = await fetch(url);
      return await initialFetch.json();
    } catch (error) {
      return Error('error');
    }
  }

  fetchSwapi = async (url, type) => {
    try {
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
    } catch (error) {
      return Error('error');
    }
  }

  fetchPeople = async (initialFetch) => {
    try {
      const people = initialFetch.results.map( async(person) => {
        const fetchSpecies = await this.fetchSpecies(person.species);
        const fetchHomeworld = await this.fetchData(person.homeworld);
        const name = person.name;
        const birthYear = person.birth_year;
        const height = person.height;
        const mass = person.mass;
        const eyeColor = person.eye_color;
        const skinColor = person.skin_color;
        const species = fetchSpecies;
        const homeworld = fetchHomeworld.name;
        const homeworldPopulation = fetchHomeworld.population;
        return {name, birthYear, height, mass, eyeColor, skinColor, species, homeworld, homeworldPopulation, favorite: false};
      });
      return Promise.all(people);
    } catch (error) {
      return Error('error');
    }
  }

  fetchSpecies = async (initialFetch) => {
    try {
      const species = initialFetch.map( async (fetchSpecies) => {
        const  type = await this.fetchData(fetchSpecies);
        return type.name;
      });
      return Promise.all(species);
    } catch (error) {
      return Error('error');
    }
  }

  fetchPlanets = (initialFetch) => {
    try {
      const planets = initialFetch.results.map( async(planet) => {
        const name = planet.name;
        const terrain = planet.terrain;
        const climate = planet.climate;
        const population = planet.population;
        const residents = await this.fetchResidents(planet.residents);
        return {name, terrain, climate, population, residents, favorite: false};
      });
      return Promise.all(planets);
    } catch (error) {
      return Error('error');
    }
  }

  fetchResidents = (initialFetch) => {
    try {
      const residents = initialFetch.map( async(fetchResidents) => {
        const resident = await this.fetchData(fetchResidents);
        return resident.name;
      });
      return Promise.all(residents);
    } catch (error) {
      return Error('error');
    }
  }

  fetchVehicles = async (initialFetch) => {
    try {
      const vehicles = initialFetch.results.map( vehicle => {
        const name = vehicle.name;
        const model = vehicle.model;
        const manufacturer = vehicle.manufacturer;
        const vehicleClass = vehicle.vehicle_class;
        const passengers = vehicle.passengers;
        return {name, model, manufacturer, vehicleClass, passengers, favorite: false};
      });
      return Promise.all(vehicles);
    } catch (error) {
      return Error('error');
    }
  }
}

export default Helper;
