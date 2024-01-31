import React from "react";
import StateBarContainer from "../StateBarContainer/StateBarContainer";
import SideBarContainer from "../SideBarContainer/SideBarContainer";
import DashboardContainer from "../DashboardContainer/DashboardContainer";


const Layout = ({ children }) => {
	const style = {
		grid:"grid grid-cols-12 grid-rows-12 gap-0 w-screen h-screen "
	}
	return (
		<div className={ style.grid + "bg-cover bg-[url('https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/fcy2n4h6qx2xfwkyzup5')]"}>
			<StateBarContainer />

			<SideBarContainer />

			<DashboardContainer>{children}</DashboardContainer>
		</div>
	);
};

export default Layout;
