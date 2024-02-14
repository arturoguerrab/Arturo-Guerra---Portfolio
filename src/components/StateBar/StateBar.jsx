import React from "react";
import ChangeLanguageContainer from "./StateBarComponents/ChangeLanguage/ChangeLanguageContainer";
import DownloadResumeContainer from "./StateBarComponents/DownloadResume/DownloadResumeContainer";
import LocationContainer from "./StateBarComponents/Location/LocationContainer";
import ClockContainer from "./StateBarComponents/Clock/ClockContainer";
import ChangeBgContainer from "./StateBarComponents/ChangeBg/ChangeBgContainer";

const StateBar = () => {
	const style = {
		header: "fixed top-2 left-0 w-full px-2 h-12 z-10 flex justify-center",
		stateBar: "h-full w-full rounded-xl glassmorphism max-w-[1920px] ",
		gridSM: "grid grid-cols-6 gap-1.5 p-1.5 ",
		gridMD: "sm:grid-cols-12 ",
	};
	return (
		<header className={style.header}>
			<div className={style.stateBar + style.gridSM + style.gridMD}>
				<div className="col-span-3 grid grid-cols-3 sm:col-span-4  sm:grid-cols-4 xl:col-span-3  xl:grid-cols-3 xl:md:grid-cols-9 gap-1.5">
					<ChangeLanguageContainer />
					<DownloadResumeContainer />
					<ChangeBgContainer />
				</div>
				<LocationContainer />
				<ClockContainer />
			</div>
		</header>
	);
};

export default StateBar;
