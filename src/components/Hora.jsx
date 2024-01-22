import axios from "axios";
import React, { useEffect, useState } from "react";

const Hora = () => {
	let [location, setLocation] = useState(null);
	let [weather, setWeather] = useState(null);

	async function getUser(lat, lng) {
		try {
			const response = await axios.get(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
			);
			setLocation(response.data);
		} catch (error) {
			console.error(error);
		}
	}
	async function getWeather(lat, lng) {
		try {
			const response = await axios.get(
				` http://api.weatherapi.com/v1/current.json?key=3019062f14b3484187214954242201&q=${lat},${lng}&localityLanguage=en`
			);
			setWeather(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				getUser(coords.latitude, coords.longitude);
				getWeather(coords.latitude, coords.longitude)
			},
			(err) => {
				setLocation((location = ""));
			}
		);
	}, []);
    console.log('run hora')
	if (!location) {
		return <div>Anywhere</div>;
	}

	return <>
		<div>{location.city + " - " + location.countryCode}</div>
		<div className="flex bg-slate-100 justify-center items-center">
			<h2>{weather.current.temp_c} °C</h2>
			<img src={`https:${weather.current.condition.icon}`} alt="" />
		</div>
	</>
};

export default Hora;
