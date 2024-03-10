import React from "react";
import Marquee from "react-fast-marquee";

const Location = ({ props }) => {
	if (!props.currentLocation || !props.weather) {
		return (
			<Marquee
				className="rounded-xl bg-gradient-to-r from-[#30C1FF] to-[#358CF2] text-white text-sm font-semibold h-full overflow-hidden  "
				speed={20}
			>
				Anywhere
			</Marquee>
		);
	}

	return (
		<Marquee
			className="rounded-xl bg-gradient-to-r from-[#30C1FF] to-[#358CF2] text-white text-sm lg:text-base font-semibold h-full overflow-hidden "
			speed={20}
		>
			<div className="flex justify-center items-center">
				<img
					src={`https:${props.weather.current.condition.icon}`}
					alt="Weather condition image"
					className="h-10"
				/>
				<h2>{props.weather.current.temp_c} °C</h2>
			</div>
			<div className="p-1">
				{"| " +
					props.currentLocation.city +
					", " +
					props.currentLocation.countryName}
			</div>
		</Marquee>
	);
};

export default Location;
