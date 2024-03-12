import React, { useContext, useState } from "react";

import { DataContext } from "../../../../context/DataContextProvider";

import ChangeBg from "./ChangeBg";

const ChangeBgContainer = () => {
	const { setBackground } = useContext(DataContext);
	const settings = ["waves","coolors", "shapes",'a','n','z','b','c','y'];

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
