import React from "react";

const Experience = () => {
	return (
		<div id="experience">
			<div className="glassmorphism h-11 mb-8 rounded-2xl ">experience</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-a8 md:grid-rows-a5 xl:grid-rows-a3 gap-8 pb-8">
				<div className="bg-white col-span-1 row-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-2 rounded-3xl "></div>
				<div className="bg-black col-span-1 md:col-start-2 xl:col-span-2 rounded-3xl"></div>
				<div className="bg-green-200 col-span-1 row-span-2 md:row-start-3 xl:row-start-2 xl:col-start-2 2xl:col-start-3   rounded-3xl "></div>
				<div className="bg-white col-span-1 row-span-2 rounded-3xl "></div>
				<div className="bg-black col-span-1 2xl:col-span-2 rounded-3xl"></div>
			</div>
		</div>
	);
};

export default Experience;
