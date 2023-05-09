import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

import { getAllStarships } from "../../services/sw-api";

import "./StarshipsList.css"

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
      <div className="ship-list">
        {StarshipList.map(ship => (
          <Link 
            key={ship.url}
            to={`/starships/${sliceId(ship.url)}`}
          ><button className="ship-btn">{ship.name}</button></Link>
        ))}
      </div>
    </main>
  )
}

export default StarshipList
