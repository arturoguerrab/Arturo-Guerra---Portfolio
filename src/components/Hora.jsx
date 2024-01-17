import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContextProvider'

const Hora = () => {

    let [location, setLocation] = useState(null)
    const {language} = useContext(DataContext)
    
    async function getUser(lat,lng) {
        try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=a6ea994bc6d43edf50729c432390cede`);
            setLocation(response.data[0])
        } catch (error) {
            console.error(error);
        }
    }

    
    useEffect(()=>{
        console.log('repeat')
        if( !navigator.geolocation ) {
            return alert ('Not Working on your current navigator')
        }
        navigator.geolocation.getCurrentPosition(
            ({coords})=>{
                getUser(coords.latitude,coords.longitude)
            },
            (err)=>{
                setLocation(location = '')
            }
        )
    },[])


    if(!location){
        return (
            <div>Anywhere</div>
        )
    }
    if(!language){
        return (
            <div>{location.name +' - '+ location.country}</div>
        )
    }
    return (
        <div>{location.local_names.es +' - '+ location.country}</div>
    )
}

export default Hora