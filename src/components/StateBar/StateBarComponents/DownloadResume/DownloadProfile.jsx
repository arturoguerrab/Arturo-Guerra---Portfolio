import React from "react";

const DownloadProfile = ({ props }) => {
	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className="bg-pgreen w-28 h-7 lg:h-9 flex justify-center rounded-xl  self-end "
		>
			<button className="flex items-center gap-1.5 bg-transparent rounded-xl ">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/zsarbjzbfohwhbypyk6b"
					alt="Download resume icon"
					loading="lazy"
					className="h-4"
				/>
				<span className="text-sm lg:text-base font-bold  text-pwhite ">
					Resume
				</span>
			</button>
		</a>
	);
};

export default DownloadProfile;
