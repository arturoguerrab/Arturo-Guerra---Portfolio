import React, { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";

const DownloadResume = () => {
	const { language } = useContext(DataContext);
	const condition = () => {
		return !language ? "en" : "es";
	};
	console.log("run download");
	return (
		<div className="col-span-2 flex justify-center items-center">
			<a
				href={`../../public/ArturoGuerra_${condition()}.pdf`}
				download={`ArturoGuerra_${condition()}.pdf`}
			>
				<button className="bg-[#00CC66] text-white rounded-2xl h-10 flex items-center">Download</button>
			</a>
		</div>
	);
};

export default DownloadResume;
