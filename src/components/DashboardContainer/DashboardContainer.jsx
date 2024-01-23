import React from "react";

const DashboardContainer = ({ children }) => {
	return (
		<main className="col-span-11 row-span-11 col-start-1 row-start-2 ps-10 pe-5 my-10 overflow-y-scroll">
			{children}
		</main>
	);
};

export default DashboardContainer;
