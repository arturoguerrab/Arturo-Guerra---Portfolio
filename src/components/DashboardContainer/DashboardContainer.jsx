import React from "react";

const DashboardContainer = ({ children }) => {
	return (
		<main className="pt-12 pb-[5.5rem] w-80 md:w-[42rem] xl:w-[62rem] 2xl:w-[86rem]">
			{children}
		</main>
	);
};

export default DashboardContainer;
