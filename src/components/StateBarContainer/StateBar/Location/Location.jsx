import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import axios from "axios";

const Location = () => {
	let [currentLocation, setCurrentLocation] = useState(null);

	const { location } = useContext(DataContext);

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
			? setCurrentLocation(null)
			: getUserLocation(location.lat, location.lng);
	}, [location]);

	if (!currentLocation) {
		return <div>Anywhere</div>;
	}

	return (
		<div className="flex justify-center items-center h-10 mx-2 text-sm  ">
			{currentLocation.city + " - " + currentLocation.countryCode}
		</div>
	);
};

export default Location;
