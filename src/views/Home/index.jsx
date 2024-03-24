import React, { useState } from 'react'
import './index.css'
import fetchApi from '../../config/api'
import { addLocation } from '../../config/firebase'

export default function Home() {
  const [Location, setLocation] = useState('karachi')
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
          {info.current ? 
          <img src={info?.current?.condition?.icon} alt="" />
          :
          <></>
        }
          <span>{info?.current?.condition?.text}</span>

        </div>
        <div className="infoDiv">
          {info?.current?.temp_c !== undefined ? (
            <h1 className='mainHead'>
              {info.current.temp_c + '°'}
            </h1>) : (<></>)}

          <h1 className='mainHead'>{info?.location?.name}</h1>
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
            <p>{info.current ? 'Wind Speed':<></>}</p>
            <p>{info.current ? info?.current?.wind_kph + ' KPH' : <></>}</p>
          </div>

          <div className="first">
            <p>{info.current ? 'Wind Direction':<></>}</p>
            <p>{info.current ? info?.current?.wind_degree + 'deg' : <></>}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
