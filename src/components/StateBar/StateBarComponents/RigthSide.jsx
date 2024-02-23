import React from "react";
import LocationContainer from "./Location/LocationContainer";
import ClockContainer from "./Clock/ClockContainer";

const RigthSide = () => {
	const style = {
		grid: "col-span-3 grid grid-cols-3 gap-1.5 h-9 ",
		gridSM: "sm:col-span-4 sm:col-start-9 sm:grid-cols-4 ",
		gridLG: "lg:col-span-3 lg:col-start-10 lg:grid-cols-8 ",
		grid2XL: "2xl:col-span-2 2xl:col-start-11 ",
	};
	return (
		<div className={style.grid + style.gridSM + style.gridLG + style.grid2XL}>
			<LocationContainer />
			<ClockContainer />
		</div>
	);
};

export default RigthSide;
