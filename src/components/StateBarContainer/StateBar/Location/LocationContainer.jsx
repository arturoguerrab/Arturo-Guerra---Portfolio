import React from 'react'
import Location from './Location'
import Weather from './Weather'

const LocationContainer = () => {
  return (
    <div className="col-span-3 col-start-9 flex items-center">
        <div className='rounded-[1.25rem] bg-[#358CF2] text-white w-full flex justify-center'>
            <Weather/>
            <Location/>
        </div>
    </div>
  )
}

export default LocationContainer