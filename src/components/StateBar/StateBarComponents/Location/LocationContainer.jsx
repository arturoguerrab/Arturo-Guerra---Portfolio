import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import axios from "axios";
import Location from "./Location";

const LocationContainer = () => {
	let [currentLocation, setCurrentLocation] = useState(null);
	let [weather, setWeather] = useState(null);
	const { location } = useContext(DataContext);

	const apiKey = import.meta.env.VITE_API_WEATHER_KEY;

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

	async function getUserLocation(lat, lng) {
		try {
			const response = await axios.get(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
			);
			setCurrentLocation(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		!location
			? setCurrentLocation(null) && setWeather(null)
			: getUserLocation(location.lat, location.lng) &&
			  getWeather(location.lat, location.lng);
	}, [location]);

	const props = { currentLocation, weather };

	return <Location props={props} />;
};

export default LocationContainer;
