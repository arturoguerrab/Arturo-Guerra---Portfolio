import React, { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import DownloadResume from "./DownloadResume";
import DownloadProfile from "./DownloadProfile";

const DownloadResumeContainer = ({profile}) => {
	const { language } = useContext(DataContext);
	const condition = () => {
		return !language ? "en" : "es";
	};

	const props = { condition };
	if(profile){
		return <DownloadProfile props={props} />;
	}
	return <DownloadResume props={props} />;
};

export default DownloadResumeContainer;
