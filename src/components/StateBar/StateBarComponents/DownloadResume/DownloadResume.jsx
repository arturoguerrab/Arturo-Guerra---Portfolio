import React from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const DownloadResume = ({ props }) => {
	const style = {
		desing:
			"bg-[#00CC66] text-white rounded-xl flex justify-center items-center ",
		gridSM: " sm:col-span-2 ",
		gridLG: "lg:col-span-4 ",
	};

	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className={style.desing + style.gridSM + style.gridLG}
		>
			<button className={"flex gap-1.5 bg-transparent"}>
				<FilterDramaIcon />
				<span className="hidden font-semibold sm:inline">Resume</span>
			</button>
		</a>
	);
};

export default DownloadResume;
