import React, { useState } from 'react'

const Reloj = () => {
    let time = new Date().toLocaleTimeString()
    const [currentTime, SetCurrentTime] = useState(time)

    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString()
        SetCurrentTime(time)
    }

    setInterval(updateTime, 1000)
    return (
        <div>{currentTime}</div>
    )
}

export default Reloj