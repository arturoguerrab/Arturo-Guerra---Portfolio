import React from "react";

const ButtonLink = ({ to, text, style}) => {
	return (
		<a href={`${to}`} target="_blank">
			<button className={`bg-pgreen rounded-full text-white font-bold w-20 h-7 text-sm ` + style }>
				{text}
			</button>
		</a>
	);
};

export default ButtonLink;
 