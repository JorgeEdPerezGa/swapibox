class Helper {

  fetchData = async (url) => {
    const initialFetch = await fetch(url);
    return await initialFetch.json();
  }

  fetchSwapi = async (url, type) => {
    const initialFetch = await this.fetchData(url);
    const next = initialFetch.next;
    const previous = initialFetch.previous;
    if (type === 'people'){
      const results = await this.fetchPeople(initialFetch);
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
}

export default Helper;
