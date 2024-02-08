import React, { useState } from 'react'
import './index.css'
import fetchApi from '../../config/api'
import { addLocation } from '../../config/firebase'

export default function Home() {
  const [Location, setLocation] = useState('')
  const [info, setInfo] = useState([])

  const handleSearch = async () => {
    const result = await fetchApi(Location)
    const data = await addLocation(Location)
    setInfo(result)

    setLocation('')
  }

  console.log('info', info);
  return (
    <div className='main'>
      <div className="container">
        <div className="image">
          <img src={info?.current?.condition?.icon} alt="" />
          <span>{info?.current?.condition?.text}</span>

        </div>
        <div className="infoDiv">
          {info?.current?.temp_c !== undefined ? (
            <h1>
              {info.current.temp_c + '°'}
            </h1>) : (<></>)}

          <h1>{info?.location?.name}</h1>
          <h4>{info?.location?.country}</h4>
        </div>
      </div>
      <div className="secondPart">
        <div className="topItem">
          <div className="Info">
            <input
              type="text"
              id='location'
              placeholder='Another Location'
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className='Search' onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass">
            </i>
          </div>
        </div>
        <hr />
        <div className="bottomItem">
          <div className="first">
            <h1>{info?.location?.name}</h1>
            <h1>{info?.location?.name}</h1>
          </div>

          <div className="first">
          <h1>{info?.location?.name}</h1>
          <h1>{info?.location?.name}</h1>
          </div>
          
          <div className="first">
          <h1>{info?.location?.name}</h1>
          <h1>{info?.location?.name}</h1>
          </div>

          <div className="first">
          <h1>{info?.location?.name}</h1>
          <h1>{info?.location?.name}</h1>
        
          </div>


        </div>
      </div>
    </div>
  )
}
