import React from "react";

const Clock = ({ props }) => {
	const style = {
		desing:
			"bg-[#28333E] text-white rounded-xl flex justify-center items-center font-semibold ",
		gridLG: " lg:col-span-2 ",
	};

	return <div className={style.desing + style.gridLG}>{props.time}</div>;
};

export default Clock;
