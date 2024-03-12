import React from "react";

const Clock = ({ props }) => {
	return (
		<time className="w-12 h-full flex justify-center items-center bg-pblack text-pwhite text-sm font-semibold rounded-xl || md:w-16 || lg:text-base">
			{props.time}
		</time>
	);
};

export default Clock;
