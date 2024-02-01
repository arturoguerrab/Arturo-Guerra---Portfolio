import React from "react";
import Location from "./Location";
import Weather from "./Weather";
import Marquee from "react-fast-marquee";

const LocationContainer = () => {
	const marqueeStyles =
		" rounded-[1.25rem] h-8 bg-gradient-to-r from-[#30C1FF] to-[#358CF2] text-white  overflow-hidden ";

	return (
		<div className="col-start-8 md:col-start-9 me-2 col-span-3 flex items-center justify-between  ">
			{/* // Marquee Mobile */}
			<div className=" flex gap-2 md:hidden  ">
				<Marquee className={marqueeStyles +"flex gap-2 "} speed={20}>
					<Weather />
					<Location />
				</Marquee>
			</div>

			{/* // Marquee Tablets */}

			<div
				className={marqueeStyles + " hidden md:flex justify-center xl:hidden"}
			>
				<Weather />
				<Marquee speed={20} className="w-2/4    overflow-hidden ">
					<Location />
				</Marquee>
			</div>

			{/* // Marquee desktop */}

			<div
				className={
					marqueeStyles + " hidden xl:flex w-80  justify-center items-center"
				}
			>
				<Weather />
				<Location />
			</div>
		</div>
	);
};

export default LocationContainer;
