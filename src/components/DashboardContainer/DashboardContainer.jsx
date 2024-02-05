import React from "react";

const DashboardContainer = ({ children }) => {
	return (
		<main className="col-span-12 xl:col-span-11 row-span-10 xl:row-span-11 col-start-1 row-start-2 px-3 md:px-10 xl:pe-1  my-6 overflow-y-scroll">
			{children}
		</main>
	);
};

export default DashboardContainer;
