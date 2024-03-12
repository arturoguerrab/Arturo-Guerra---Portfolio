import React, { useContext, useState } from "react";

import { DataContext } from "../../../../context/DataContextProvider";

import ChangeBg from "./ChangeBg";

const ChangeBgContainer = () => {
	const { setBackground } = useContext(DataContext);
	const settings = ["onePiece", "waves", "shapes",'a','n'];

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const props = {
		setBackground,
		settings,
		handleClose,
		handleOpen,
		open,
	};
	return <ChangeBg props={props} />;
};

export default ChangeBgContainer;
