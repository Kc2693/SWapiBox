import root from './rootUrl';
const planets = `planets/`;

// planet name - initial fetch
// terrain - initial fetch
// Population - initial fetch
// climate - initial fetch
// residents - an array of more fetches to do


async function fetchPlanetInfo() {
  const initialFetch = await fetch(`${root}${planets}`);
  const response = await initialFetch.json();

  const organizeData = await organizePlanetaryData(response.results);

  console.log("now we are here", organizeData);
  return organizeData;
}

async function fetchResidents(residentsArray) {
  const residents = residentsArray.map(async (person) => {

    const initFetch = await fetch(person);
    const response = await initFetch.json();
    const resident = response.name;

    return resident;
  })

  return Promise.all(residents)
}

function organizePlanetaryData(planets) {
  const cleaned = planets.map(async (planet) => {
    const residents = await fetchResidents(planet.residents)

    return {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population,
      residents: residents
    };
  })
  return Promise.all(cleaned);
}

export default fetchPlanetInfo;
