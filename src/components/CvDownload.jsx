import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const CvDownload = () => {
	const { language } = useContext(DataContext);
	const condition = () => {
		return !language ? "en" : "es";
	};
	console.log("run download");
	return (
		<a
			href={`../../public/ArturoGuerra_${condition()}.pdf`}
			download={`ArturoGuerra_${condition()}.pdf`}
		>
			<button>Download</button>
		</a>
	);
};

export default CvDownload;
