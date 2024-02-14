import React, { useContext, useState } from "react";

import { DataContext } from "../../../../context/DataContextProvider";

import ChangeBg from "./ChangeBg";

const ChangeBgContainer = () => {
	const { setBackground } = useContext(DataContext);
	const settings = ["onePiece", "waves", "shapes"];

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const littlePicSelector = (setting) => {
		switch (setting) {
			case "onePiece":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ea6lanvn9rnatva9ws4m";
			case "waves":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/qgtzaznalvcvobbq5cbp";
			case "shapes":
				return "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/cceomr1gao9nstahgniy";
		}
	};

	const props = {
		setBackground,
		settings,
		handleClose,
		handleOpen,
		littlePicSelector,
		open,
	};
	return <ChangeBg props={props} />;
};

export default ChangeBgContainer;
