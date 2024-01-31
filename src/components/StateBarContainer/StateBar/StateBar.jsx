import React from "react";
import DownloadResume from "./DownloadResume/DownloadResume";
import LocationContainer from "./Location/LocationContainer";
import Clock from "./Clock/Clock";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";

const StateBar = () => {
	const style = {
		desing: "h-10 mx-2 md:mx-10 rounded-[1.25rem] bg-[#FFFFFF]/65 ",
		grid: " grid grid-cols-12 grid-rows-1 gap-0",
	};

	return (
		<div className={style.desing + style.grid}>
			<ChangeLanguage />
			<DownloadResume />
			{/* <div className="col-start-6 lg:col-span-2 lg:col-start-7 bg-purple-400">
				3
			</div> */}
			<LocationContainer />
			<Clock />
		</div>
	);
};

export default StateBar;
