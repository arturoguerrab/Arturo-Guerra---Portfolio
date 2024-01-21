import axios from "axios";
import React, { useEffect, useState } from "react";

const Hora = () => {
	let [location, setLocation] = useState(null);

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

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				getUser(coords.latitude, coords.longitude);
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

	return <div>{location.city + " - " + location.countryCode}</div>;
};

export default Hora;
