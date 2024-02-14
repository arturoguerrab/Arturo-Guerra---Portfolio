import React from "react";
import StateBar from "../StateBar/StateBar";
import DownBar from "../DownBar/DownBar";
import DashboardContainer from "../DashboardContainer/DashboardContainer";

const Layout = ({ children }) => {
	const style = {
		desing:
			"px-2 bg-cover bg-fixed bg-[url('https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ea6lanvn9rnatva9ws4m')]",
	};
	return (
		<div className={style.desing + ' flex justify-center'}>
			<StateBar />

			<DashboardContainer>{children}</DashboardContainer>

			<DownBar />
		</div>
	);
};

export default Layout;
