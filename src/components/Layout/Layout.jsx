import React from "react";
import StateBarContainer from "../StateBarContainer/StateBarContainer";
import SideBarContainer from "../SideBarContainer/SideBarContainer";
import DashboardContainer from "../DashboardContainer/DashboardContainer";


const Layout = ({ children }) => {
	return (
		<div className="grid grid-cols-12 grid-rows-12 gap-0 w-screen h-screen bg-cover      bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-3d-realista_23-2150840613.jpg?w=740&t=st=1705972423~exp=1705973023~hmac=20c490c3cedbbace36a3c3d542882a25a66ef4457316260e1e756c6b3c721654')]">
			<StateBarContainer />

			<SideBarContainer />

			<DashboardContainer>{children}</DashboardContainer>
		</div>
	);
};

export default Layout;
