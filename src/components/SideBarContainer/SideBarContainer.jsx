import React from "react";

const SideBarContainer = () => {
	const StylesAside = {
		mobile: "col-span-12 row-start-12 flex justify-center items-center mb-2 ",
		desktop: "xl:row-span-11 xl:col-start-12 xl:row-start-2",
	};

	return (
		<aside className={StylesAside.mobile + StylesAside.desktop}>
			<div className="w-80 h-12 xl:w-12 xl:h-80 flex xl:flex-col items-center justify-around rounded-xl glassmorphism ">
				<div className="bg-black w-10 h-10">1</div>
				<div className="bg-red-400 w-10 h-10">1</div>
				<div className="bg-green-400 w-10 h-10">1</div>
				<div className="bg-teal-500 w-10 h-10">1</div>
			</div>
		</aside>
	);
};

export default SideBarContainer;
