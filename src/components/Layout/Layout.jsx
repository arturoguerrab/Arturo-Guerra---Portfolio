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
		`px-2 flex justify-center  `,
	};
	return (
		<div className={style.desing}>
			<div className={`h-dvh w-dvw fixed ${background} -z-10`}>

			</div>
			<StateBar />

			<DashboardContainer>{children}</DashboardContainer>

			<DownBar />
		</div>
	);
};

export default Layout;
