import Home from "../views/Home"



export default async function fetchApi(location) {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=3b5c08e1878c483db7171616242901&q=${location}&aqi=no`)
    const result = await res.json()

  return result
}
