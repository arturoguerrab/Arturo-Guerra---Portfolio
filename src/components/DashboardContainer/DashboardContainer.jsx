import React from "react";

const DashboardContainer = ({ children }) => {
	const dashboardDesing = 'col-span-12 xl:col-span-11 row-span-10 xl:row-span-11 col-start-1 row-start-2'
	return (
		<main className={dashboardDesing + " ms-3 me-2 pe-1 md:px-10 xl:pe-1 my-5 overflow-y-scroll"}>
			{children}
		</main>
	);
};

export default DashboardContainer;
