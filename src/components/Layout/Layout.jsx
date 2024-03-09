import React, { useContext } from "react";
import StateBar from "../StateBar/StateBar";
import DownBar from "../DownBar/DownBar";
import DashboardContainer from "../DashboardContainer/DashboardContainer";
import { DataContext } from "../../context/DataContextProvider";
import "./layout.css";

const Layout = ({ children }) => {
	const { background } = useContext(DataContext);

	const style = {
		desing: `sm:px-8 flex justify-center`,
		bg: `h-dvh w-dvw fixed bg-cover bg-center ${background} -z-10`,
	};
	return (
		<div className={style.desing}>
			<div className={style.bg} />
			<StateBar />
			<DashboardContainer>{children}</DashboardContainer>
			<DownBar />
		</div>
	);
};

export default Layout;
