import React from "react";
import StateBarContainer from "../StateBarContainer/StateBarContainer";
import SideBarContainer from "../SideBarContainer/SideBarContainer";
import DashboardContainer from "../DashboardContainer/DashboardContainer";


const Layout = ({ children }) => {
	const style = {
		grid:"grid grid-cols-12 grid-rows-12 gap-0 w-screen "
	}
	return (
		<div className={ style.grid + "bg-cover h-full bg-[url('https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/qgtzaznalvcvobbq5cbp')]"}>
			<StateBarContainer />

			<SideBarContainer />

			<DashboardContainer>{children}</DashboardContainer>
		</div>
	);
};

export default Layout;
