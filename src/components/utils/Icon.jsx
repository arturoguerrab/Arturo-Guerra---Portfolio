import React from "react";

const Icon = ({ src, alt, size, style }) => {
	return (
		<img
			src={`${src}`}
			alt={`${alt}`}
			loading="lazy"
			className={
				(size ? `h-${size} w-${size} ` : "") + (style ? `${style})` : "")
			}
		/>
	);
};

export default Icon;
