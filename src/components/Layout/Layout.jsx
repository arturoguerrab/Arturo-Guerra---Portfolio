import React, { useContext } from "react";
import StateBar from "../StateBar/StateBar";
import DownBar from "../DownBar/DownBar";
import DashboardContainer from "../DashboardContainer/DashboardContainer";
import { DataContext } from "../../context/DataContextProvider";
import './layout.css'

const Layout = ({ children }) => {
	const { background } = useContext(DataContext);

	const style = {
		desing:
			`px-2 flex justify-center background ${background}`,
	};
	return (
		<div className={style.desing}>
			<StateBar />

			<DashboardContainer>{children}</DashboardContainer>

			<DownBar />
		</div>
	);
};

export default Layout;
