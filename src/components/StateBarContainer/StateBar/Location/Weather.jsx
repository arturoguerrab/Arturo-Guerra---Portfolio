import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import axios from "axios";

const Weather = () => {
	let [weather, setWeather] = useState(null);
    const apiKey = import.meta.env.VITE_API_WEATHER_KEY

	const { location } = useContext(DataContext);

	async function getWeather(lat, lng) {
		try {
			const response = await axios.get(
				` https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}&localityLanguage=en`
			);
			setWeather(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		!location ? setWeather(null) : getWeather(location.lat, location.lng);
	}, [location]);

	if (!weather) {
		return <div>No Weather</div>;
	}

	return (
		<div className="flex justify-around items-center gap-4 h-8 me-3 -ms-5">
			<img src={`https:${weather.current.condition.icon}`} alt="" className="-me-5 h-10  "/>
			<h2 className="text-sm ">{weather.current.temp_c} °C</h2>
		</div>
	);
};

export default Weather;
