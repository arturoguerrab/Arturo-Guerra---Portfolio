import React, { useContext } from "react";
import StateBar from "../StateBar/StateBar";
import DownBar from "../DownBar/DownBar";
import DashboardContainer from "../DashboardContainer/DashboardContainer";
import { DataContext } from "../../context/DataContextProvider";
import "./layout.css";


const Layout = ({ children }) => {
	const { background } = useContext(DataContext);

	return (
		<div className="sm:px-8 flex justify-center">
			<div
				className={`h-dvh w-dvw fixed bg-cover bg-center ${background} -z-10`}
			></div>
			<StateBar />
			<DashboardContainer>{children}</DashboardContainer>
			<DownBar />
		</div>
	);
};

export default Layout;
