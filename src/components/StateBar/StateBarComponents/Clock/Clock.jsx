import React from "react";

const Clock = ({ props }) => {
	return (
		<div className="bg-pblack flex justify-center items-center w-12 md:w-16 h-full  text-pwhite text-sm lg:text-base font-semibold rounded-xl">
			{props.time}
		</div>
	);
};

export default Clock;
