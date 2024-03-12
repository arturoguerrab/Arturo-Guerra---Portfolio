import React from "react";
import LeftSide from "./StateBarComponents/LeftSide";
import RigthSide from "./StateBarComponents/RigthSide";

const StateBar = () => {
	return (
		<header className="fixed w-full h-12 px-1.5 z-10 glassmorphism || sm:px-8">
			<div className="h-12 flex justify-between items-center">
				{/* Translate - Resume - ChangeBG */}
				<LeftSide />

				{/* Location - Clock */}
				<RigthSide />
			</div>
		</header>
	);
};

export default StateBar;
