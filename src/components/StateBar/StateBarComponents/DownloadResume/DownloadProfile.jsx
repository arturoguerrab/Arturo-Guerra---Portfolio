import React from "react";
import { useTranslation } from "react-i18next";

const DownloadProfile = ({ props }) => {
	const [t] = useTranslation("global");
	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className="w-28 h-7 flex justify-center rounded-xl self-end bg-pgreen || lg:h-9"
		>
			<button className="flex items-center gap-1.5 bg-transparent rounded-xl ">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/zsarbjzbfohwhbypyk6b"
					alt="Download resume icon"
					loading="lazy"
					className="h-4 w-4"
				/>
				<span className="text-sm font-bold text-pwhite || lg:text-base ">
					{t("stateBar.resume")}
				</span>
			</button>
		</a>
	);
};

export default DownloadProfile;
