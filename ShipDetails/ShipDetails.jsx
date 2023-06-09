// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getStarship } from '../services/sw-api';

import './ShipDetails.css'

const ShipDetails = () => {
  const [starship, setStarship] = useState({})
  const {shipId} = useParams()

  useEffect(() => {
    const getShipDetails = async () => {
      const shipData = await getStarship(shipId)
      setStarship(shipData)
    }
    getShipDetails()
  }, [shipId])

  if (!starship.name) return <h3>Loading Ship Details...</h3>

  return ( 
    <main className='ship-container'>
      <h1>Ship Details</h1>
      <div className='ship-details'>
        <div>{starship.name}</div>
        <div>{starship.model}</div>
        <Link 
          to={`/starships`}
          ><button 
            className='rtn-link'
          >Return</button>
        </Link>
      </div>
    </main>
  );
}

export default ShipDetails;