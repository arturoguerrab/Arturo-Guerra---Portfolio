import React from "react";

const Clock = ({ props }) => {
	const style = {
		desing:
			"bg-[#28333E] text-white rounded-xl flex justify-center items-center font-semibold ",
		gridSM: "col-start-6 ",
		gridMD: "sm:col-start-12 ",
	};

	return (
		<div className={style.desing + style.gridSM + style.gridMD}>
			{props.time}
		</div>
	);
};

export default Clock;
