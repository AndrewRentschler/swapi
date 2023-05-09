import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

import { getAllStarships } from "../../services/sw-api";

const StarshipList = () => {
  const [StarshipList, setStarshipList] = useState([])

  const sliceId = (url) => {
    return url.split("/")[5]
  }

  useEffect(() => {
    const fetchStarshipList = async () => {
      const res = await getAllStarships()
      const starshipData = res.results
      setStarshipList(starshipData)
    }
    fetchStarshipList()
  }, [])

  if (!StarshipList.length) return <h3>Loading...</h3>

  return (
    <main className="main-list">
      <h1>Starships List</h1>
      <ul>
        {StarshipList.map(ship => (
          <Link 
            key={ship.url}
            to={`/starships/${sliceId(ship.url)}`}
          ><li>{ship.name}</li></Link>
        ))}
      </ul>
    </main>
  )
}

export default StarshipList
