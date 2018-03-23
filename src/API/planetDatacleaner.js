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

  return organizeData;
}

function organizePlanetaryData(planets) {
  return planets.reduce((accu, planet) => {
    let cleanPlanet = {};

    cleanPlanet.name = planet.name;
    cleanPlanet.terrain = planet.terrain;
    cleanPlanet.climate = planet.climate;
    cleanPlanet.population = planet.population;

    accu.push(cleanPlanet);

    return accu;
  }, [])
}

export default fetchPlanetInfo;
