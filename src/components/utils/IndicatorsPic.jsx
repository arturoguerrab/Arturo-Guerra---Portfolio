import React from "react";

const IndicatorsPic = ({ section }) => {
	return (
		<img
			className="w-6 h-6"
			src={
				section == "profile"
					? "https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					: section == "experience"
					? "https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					: "https://cdn-icons-png.freepik.com/512/6915/6915987.png"
			}
			alt="Section icon"
			loading="lazy"
		/>
	);
};

export default IndicatorsPic;
