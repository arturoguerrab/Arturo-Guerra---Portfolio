import React from "react";
import LeftSide from "./StateBarComponents/LeftSide";
import RigthSide from "./StateBarComponents/RigthSide";

const StateBar = () => {
	const style = {
		header:
			"fixed w-full px-4 sm:px-8 h-12 z-10 glassmorphism",
		stateBar: "h-full ",
		grid: "grid grid-cols-6 gap-1.5 p-1.5 ",
		gridSM: "sm:grid-cols-12 ",
	};
	return (
		<header className={style.header}>
			<div className={style.stateBar + style.grid + style.gridSM + '' }>
				{/* Translate - Resume - ChangeBG */}
				<LeftSide />

				{/* Location - Clock */}
				<RigthSide />
			</div>
		</header>
	);
};

export default StateBar;
