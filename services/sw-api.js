const BASE_URL='https://swapi.dev/api'

async function getAllStarships() {
  try {
    const res = await fetch(`${BASE_URL}/starships/`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  getAllStarships
}