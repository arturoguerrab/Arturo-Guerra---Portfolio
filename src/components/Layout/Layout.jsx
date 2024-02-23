import React, { useContext } from "react";
import StateBar from "../StateBar/StateBar";
import DownBar from "../DownBar/DownBar";
import DashboardContainer from "../DashboardContainer/DashboardContainer";
import { DataContext } from "../../context/DataContextProvider";
import "./layout.css";

const Layout = ({ children }) => {
	const { background } = useContext(DataContext);

	const style = {
		desing: `px-2 flex justify-center`,
		bg: `h-dvh w-dvw fixed bg-center ${background} -z-10`,
	};
	return (
		<div className={style.desing}>
			{/* Fixed elements */}
			<div className={style.bg} />
			<StateBar />
			<DownBar />
			{/* Fixed Elements */}

			<DashboardContainer>{children}</DashboardContainer>
		</div>
	);
};

export default Layout;
