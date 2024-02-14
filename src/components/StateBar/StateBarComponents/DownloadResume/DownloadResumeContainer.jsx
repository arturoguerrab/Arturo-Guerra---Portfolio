import React, { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import DownloadResume from "./DownloadResume";

const DownloadResumeContainer = () => {
	const { language } = useContext(DataContext);
	const condition = () => {
		return !language ? "en" : "es";
	};

	
	const props ={condition}
	return (
		<DownloadResume props={props} />
	);
};

export default DownloadResumeContainer;
