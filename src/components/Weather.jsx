import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
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
		<div className="flex bg-slate-100 justify-center items-center px-3 h-[70px] m-3">
			<h2>{weather.current.temp_c} °C</h2>
			<img src={`https:${weather.current.condition.icon}`} alt="" />
		</div>
	);
};

export default Weather;
