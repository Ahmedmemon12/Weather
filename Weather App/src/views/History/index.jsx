import React from 'react'
import { getResult } from '../../config/firebase'

export default function History() {
  const getData = async ()=>{
    const result = getResult()
    console.log(result);
  }
  return (
    <div>
      <button onClick={getData}>Show</button>
    </div>
  )
}
