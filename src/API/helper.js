const root = `https://swapi.co/api/`;
const films = `films`
const people = `people/`


async function fetchFilmTexts() {
  const initialFetch = await fetch(`${root}${films}`)
  const response = await initialFetch.json();

  return response.results
}

async function fetchPeopleInfo() {
  const initialFetch = await fetch(`${root}${people}`)
  const response = await initialFetch.json()

  const peopleWithHomes = await fetchHomeworld(response.results)
  const speciesAndLang = await fetchSpecies(response.results)

  const finishedProduct = completeHumanBean(peopleWithHomes, speciesAndLang)

  return finishedProduct

}

function fetchHomeworld(people) {
  const homeArray = people.map(async(person) => {

    const initFetch = await fetch(person.homeworld)
    const response = await initFetch.json().then(data => ({name: person.name, homeworld: data.name, population: data.population}))

    return response
  })

  const homeworlds = Promise.all(homeArray);

  return homeworlds
}

function fetchSpecies(people) {
  const fetchSpecies = people.map(async(person) => {
    const initFetch = await fetch(person.species)
    const response = await initFetch.json().then(data => ({name: person.name, species: data.name, language: data.language}))

    return response
  })

  const speciesAndLang = Promise.all(fetchSpecies)

  return speciesAndLang
}

function completeHumanBean(homeworld, species) {
  const complete = homeworld.reduce((accu, world) => {
    let person = {};
    person.name = world.name
    person.homeworld = world.homeworld
    person.population = world.population

    species.forEach((species) => {
      if (species.name === world.name) {
        person.species = species.species
        person.language = species.language
      }
    })

    accu.push(person)

    return accu
  }, [])
  return complete
}

export { fetchFilmTexts, fetchPeopleInfo }
