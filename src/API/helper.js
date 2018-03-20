const root = `https://swapi.co/api/`;
const films = `films`


async function fetchFilmTexts() {
  const initialFetch = await fetch(`${root}${films}`)
  const response = await initialFetch.json();

  return response.results
}

export { fetchFilmTexts }
