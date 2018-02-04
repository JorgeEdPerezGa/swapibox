import Helper from './index';
import mock from '../__mocks__';

const { planets, vehicles, people } = mock;

describe('helper', () => {
  const url = 'url';
  const helper = new Helper();

  it('should fetch swapi data', async() => {
    window.fetch =
    jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          { results: mock.people.results }
        )
      })
    );

    helper.fetchData(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return clean data', async() => {
    const expected = { results: mock.people.results };
    const resolvedPromise = await helper.fetchData();

    expect(resolvedPromise).toEqual(expected);
  });

  describe('people', () => {

    it('should fetch people', async () => {
      const expected = { results: mock.people.results };
      const person = [{'birthYear': '19BBY', 'eyeColor': 'blue', 'height': '172', 'homeworld': undefined, 'homeworldPopulation': undefined, 'mass': '77', 'name': 'Luke Skywalker', 'skinColor': 'fair', 'species': [undefined]}];

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            { results: mock.people.results }
          )
        })
      );

      const resolvedPromise = await helper.fetchPeople(expected);

      expect(resolvedPromise).toEqual(person);
    });

    it('should return an error if fetch people fails', async() => {
      const rejectedPromise = await helper.fetchPeople();

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 500
        })
      );

      expect(rejectedPromise).toEqual(Error('error'));
    });

    it('should fetch species', async() => {
      const person = [{'birthYear': '19BBY', 'eyeColor': 'blue', 'height': '172', 'homeworld': undefined, 'homeworldPopulation': undefined, 'mass': '77', 'name': 'Luke Skywalker', 'skinColor': 'fair', 'species': 'endpoint'}];

      const expected = {name: 'Human', average_height: '180', average_lifespan: '120', classification : 'mammal'};

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            { name: expected.name }
          )
        })
      );

      const resolvedPromise = await helper.fetchSpecies(person);

      expect(resolvedPromise).toEqual([expected.name]);
    });

    it('should return an error if fetch species fails', async() => {
      const rejectedPromise = await helper.fetchSpecies();

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 500
        })
      );

      expect(rejectedPromise).toEqual(Error('error'));
    });


    it('should fetch homeworld with the right parameters', async() => {
      const url = 'https://swapi.co/api/planets/8/';

      helper.fetchData(url);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should fetch homeworld name', async() => {
      const person = [{'birthYear': '19BBY', 'eyeColor': 'blue', 'height': '172', 'homeworld': 'endpoint', 'homeworldPopulation': undefined, 'mass': '77', 'name': 'Luke Skywalker', 'skinColor': 'fair', 'species': 'endpoint'}];

      const expected = {name: 'Vulpter', gravity: '1', orbital_period: '391', diameter: '14900', climate: 'temperate'};

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            { name: expected.name }
          )
        })
      );

      const resolvedPromise = await helper.fetchData(person);

      expect(resolvedPromise.name).toEqual(expected.name);
    });

    it('should fetch homeworld population', async() => {
      const person = [{'birthYear': '19BBY', 'eyeColor': 'blue', 'height': '172', 'homeworld': 'endpoint', 'homeworldPopulation': undefined, 'mass': '77', 'name': 'Luke Skywalker', 'skinColor': 'fair', 'species': 'endpoint'}];

      const expected = {name: 'Vulpter', population: '421000000', gravity: '1', orbital_period: '391', diameter: '14900', climate: 'temperate'};

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            { population: expected.population }
          )
        })
      );

      const resolvedPromise = await helper.fetchData(person);

      expect(resolvedPromise.population).toEqual(expected.population);
    });
  });

  describe('planets', async() => {

    it('should fetch planets', async() => {
      const expected = { results: mock.planets.results };
      const planet = [{'climate': 'temperate', 'name': 'Bespin', 'population': '6000000', 'residents': [undefined], 'terrain': 'gas giant'}];

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            { results: mock.planets.results }
          )
        })
      );

      const resolvedPromise = await helper.fetchPlanets(expected);

      expect(resolvedPromise).toEqual(planet);
    });

    it('should fetch residents with the right parameters', async() => {
      const url = 'https://swapi.co/api/people/26/';

      helper.fetchResidents(url);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should fetch planet residents', async() => {
      const planet = {'climate': 'temperate', 'name': 'Bespin', 'population': '6000000', 'residents': [{'name': 'Lobot'}], 'terrain': 'gas giant'};

      const expected = {'name': 'Lobot'};

      window.fetch =
        jest.fn().mockImplementation(() =>
          Promise.resolve({
            status: 200,
            json: () => Promise.resolve(
              { name: expected.name }
            )
          })
        );

      const resolvedPromise = await helper.fetchResidents(planet.residents);

      expect(resolvedPromise).toEqual([expected.name]);
    });

    it('should return an error if fetch residents', async() => {
      const rejectedPromise = await helper.fetchResidents();

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 500
        })
      );

      expect(rejectedPromise).toEqual(Error('error'));
    });
  });

  describe('vehicles', () => {

    it('should fetch vehicles', async () => {
      const expected = { results: mock.vehicles.results };
      const vehicle = [{'manufacturer': 'Corellia Mining Corporation', 'model': 'Digger Crawler', 'name': 'Sand Crawler', 'passengers': '30', 'vehicleClass': 'wheeled'}];
      const resolvedPromise = await helper.fetchVehicles(expected);

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(
            { results: mock.vehicles.results }
          )
        })
      );

      expect(resolvedPromise).toEqual(vehicle);
    });

    it('should return an error if fetch fails', async() => {
      const rejectedPromise = await helper.fetchVehicles();

      window.fetch =
      jest.fn().mockImplementation(() =>
        Promise.reject({
          status: 500
        })
      );

      expect(rejectedPromise).toEqual(Error('error'));
    });
  });
});
