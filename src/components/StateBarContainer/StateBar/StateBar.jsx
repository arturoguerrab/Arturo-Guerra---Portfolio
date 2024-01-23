import React from "react";
import ToggleLanguage from "./ToggleLanguage/ToggleLanguage";
import DownloadResume from "./DownloadResume/DownloadResume";
import LocationContainer from "./Location/LocationContainer";
import Clock from "./Clock/Clock";

const StateBar = () => {
	const Style = {
		Size: "h-12 rounded-[1.25rem] mx-10 mt-5  bg-[#FFFFFF]/65 ",
		Grid: "grid grid-cols-12 grid-rows-1 gap-0",
	};

	return (
		<div className={Style.Size + Style.Grid}>
			<ToggleLanguage/>
			<DownloadResume/>
			<div className="col-span-2 col-start-7">3</div>
			<LocationContainer/>
			<Clock/>
		</div>
	);
};

export default StateBar;
