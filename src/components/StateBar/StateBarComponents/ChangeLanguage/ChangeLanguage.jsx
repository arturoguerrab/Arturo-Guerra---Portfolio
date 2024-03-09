import React from "react";
import Icon from "../../../utils/Icon";

const ChangeLanguage = ({ props }) => {
	return (
		<button
			className="bg-pblack flex justify-center items-center w-12 h-9 md:w-20 md:gap-1.5 rounded-xl "
			onClick={props.handleChange}
		>
			<Icon
				src={
					"https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/kue09wnxh4xvv3ogdwkh"
				}
				alt={"translate icon"}
			/>
			<span className="text-pwhite font-semibold text-xs lg:text-sm hidden md:inline ">
				{!props.language ? "EN" : "ES"}
			</span>
		</button>
	);
};

export default ChangeLanguage;
