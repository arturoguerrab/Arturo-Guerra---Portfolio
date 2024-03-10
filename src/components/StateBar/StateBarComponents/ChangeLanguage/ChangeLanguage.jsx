import React from "react";

const ChangeLanguage = ({ props }) => {
	return (
		<button
			className="bg-pblack flex justify-center items-center w-12 h-9 md:w-20 md:gap-1.5 rounded-xl "
			onClick={props.handleChange}
		>
			<img
				src={
					!props.language
						? "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/yhbosuysilp53l7cuwv1"
						: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/z58fvfwyndviarmdlvih"
				}
				alt="translate icon"
				loading="lazy"
				className="h-6  md:hidden "
			/>
			<img
				src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/j35upuybxsqyvblmynil"
				alt="translate icon"
				loading="lazy"
				className="h-6 hidden md:inline"
			/>
			<span className="text-pwhite font-bold text-xs lg:text-sm hidden md:inline ">
				{!props.language ? "EN" : "ES"}
			</span>
		</button>
	);
};

export default ChangeLanguage;
