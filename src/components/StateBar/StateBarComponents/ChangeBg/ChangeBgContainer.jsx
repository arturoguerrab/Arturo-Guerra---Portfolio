import React from "react";
import BrushIcon from "@mui/icons-material/Brush";

const ChangeBgContainer = () => {
	const style = {
		desing:
			"bg-gray-800 text-white rounded-xl flex justify-center items-center ",
		gridXL: "",
		gridLND: "",
	};
	return (
		<div className={style.desing + style.gridXL}>
			<BrushIcon />
		</div>
	);
};

export default ChangeBgContainer;
