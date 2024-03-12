import React from "react";
import { useTranslation } from "react-i18next";

const DownloadResume = ({ props }) => {
	const { t } = useTranslation("global");
	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className="w-12 flex justify-center rounded-xl bg-pgreen || sm:w-28"
		>
			<button className="flex items-center gap-1.5 bg-transparent rounded-xl">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/zsarbjzbfohwhbypyk6b"
					alt="Download resume icon"
					loading="lazy"
					className="h-6 w-6"
				/>
				<span className="hidden text-sm font-bold text-pwhite || sm:inline || lg:text-base">
					{t("stateBar.resume")}
				</span>
			</button>
		</a>
	);
};

export default DownloadResume;
