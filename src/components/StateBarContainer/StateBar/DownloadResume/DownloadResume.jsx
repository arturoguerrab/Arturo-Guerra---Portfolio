import React, { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const DownloadResume = () => {
	const { language } = useContext(DataContext);
	const condition = () => {
		return !language ? "en" : "es";
	};

	const buttonDesing =
		"bg-[#00CC66] text-white rounded-xl h-8 flex w-14 xl:w-28 justify-center items-center gap-2 ";

	return (
		<div className="col-start-3 md:col-start-2  col-span-2 sm:col-span-1 // flex justify-center items-center">
			<a
				href={`../../public/ArturoGuerra_${condition()}.pdf`}
				download={`ArturoGuerra_${condition()}.pdf`}
			>
				<button className={buttonDesing + "hidden xl:flex"}>
					<FilterDramaIcon /> Resume
				</button>
				<button className={buttonDesing + "flex xl:hidden"}>
					<FilterDramaIcon />
				</button>
			</a>
		</div>
	);
};

export default DownloadResume;
