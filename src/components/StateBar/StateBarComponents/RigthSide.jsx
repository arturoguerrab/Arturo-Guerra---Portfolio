import React from "react";
import LocationContainer from "./Location/LocationContainer";
import ClockContainer from "./Clock/ClockContainer";

const RigthSide = () => {
	return (
		<div className="flex h-9 gap-1.5 w-48 md:w-64 lg:w-80 ">
			<LocationContainer />
			<div className="h-9">
				<ClockContainer />
			</div>
		</div>
	);
};

export default RigthSide;
