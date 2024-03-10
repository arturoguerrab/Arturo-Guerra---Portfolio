import React from "react";

const DownloadResume = ({ props }) => {
	return (
		<a
			href={`../../public/ArturoGuerra_${props.condition()}.pdf`}
			download={`ArturoGuerra_${props.condition()}.pdf`}
			className="bg-pgreen w-12 sm:w-28 flex justify-center rounded-xl "
		>
			<button className="flex items-center gap-1.5 bg-transparent rounded-xl ">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/zsarbjzbfohwhbypyk6b"
					alt="Download resume icon"
					loading="lazy"
					className="h-6"
				/>
				<span className="hidden sm:inline text-sm lg:text-base font-bold  text-pwhite ">
					Resume
				</span>
			</button>
		</a>
	);
};

export default DownloadResume;
