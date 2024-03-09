import React from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import Icon from "../../../utils/Icon";

const DownloadResume = ({ props }) => {
	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className="bg-pgreen w-12 sm:w-28 flex justify-center rounded-xl "
		>
			<button className="flex items-center gap-1.5 bg-transparent rounded-xl ">
				<Icon
					src={
						"https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/kue09wnxh4xvv3ogdwkh"
					}
					alt={"Download resume icon"}
				/>
				<span className="hidden sm:inline text-sm lg:text-base font-semibold  text-pwhite ">
					Resume
				</span>
			</button>
		</a>
	);
};

export default DownloadResume;
