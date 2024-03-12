import React from "react";
import Marquee from "react-fast-marquee";

const Location = ({ props }) => {
	if (!props.currentLocation || !props.weather) {
		return (
			<Marquee
				className="h-full rounded-xl bg-gradient-to-r from-[#30C1FF] to-[#358CF2] text-pwhite text-sm font-semibold overflow-hidden || lg:text-base"
				speed={20}
			>
				Anywhere
			</Marquee>
		);
	}

	return (
		<Marquee
			className="h-full rounded-xl bg-gradient-to-r from-[#30C1FF] to-[#358CF2] text-pwhite text-sm font-semibold overflow-hidden || lg:text-base"
			speed={20}
		>
			<div className="flex justify-center items-center">
				<img
					src={`https:${props.weather.current.condition.icon}`}
					alt="Weather condition image"
					className="h-10 w-10"
				/>
				<span>{props.weather.current.temp_c} °C</span>
			</div>
			<p className="p-1">
				{"| " +
					props.currentLocation.city +
					", " +
					props.currentLocation.countryName}
			</p>
		</Marquee>
	);
};

export default Location;
