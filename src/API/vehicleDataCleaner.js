import root from './rootUrl';
const vehicles = `vehicles/`;

// vehicle name
// model
// class
// number of passengers


async function fetchVehicleInfo() {
  const initFetch = await fetch(`${root}${vehicles}`);
  const response = await initFetch.json();

  const cleanData = await cleanVehicles(response.results)

  return cleanData
}

function cleanVehicles(vehicles) {
  return vehicles.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  });

}





export default fetchVehicleInfo;
