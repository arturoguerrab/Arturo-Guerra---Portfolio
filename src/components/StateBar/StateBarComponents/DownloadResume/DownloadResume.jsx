import React from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const DownloadResume = ({ props }) => {
	const style = {
		desing:"bg-[#00CC66] text-white rounded-xl flex justify-center items-center ",
		gridMD:" sm:col-span-2 ",
		gridLG:"xl:col-span-3 ",
	};

	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className={style.desing + style.gridMD + style.gridLG + ' '}
		>
			<button className={"flex gap-1 bg-transparent"}>
				<FilterDramaIcon />
				<span className="hidden sm:inline">Resume</span>
			</button>
		</a>
	);
};

export default DownloadResume;
