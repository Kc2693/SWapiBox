const root =
`https://swapi.co/api/`;

function apiGet(url) {
  return fetch(url).then(response => response.json());
}

export default {
  getForecast(state, city) {
    return apiGet(`${root}${state}/${city}.json`);
  }
};
