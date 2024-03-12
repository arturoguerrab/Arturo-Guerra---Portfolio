import React from "react";
import { useTranslation } from "react-i18next";

const Timeline = ({ size, title, elements }) => {
	const { t } = useTranslation("global");

	return (
		<article className="h-full bg-pblack rounded-3xl">
			{/* FIRST SECTION */}
			<div className={`h-2/6 p-5 flex justify-between || ${size}p-8`}>
				<div>
					<h3
						className={`text-pgreen font-semibold text-xs || ${size}text-base `}
					>
						{t("profile.timeline.experience")}
					</h3>
					<h2
						className={`font-bold text-2xl text-pwhite || ${size}text-3xl`}
					>
						{title}
					</h2>
				</div>
				<img
					className="h-5 w-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/vg0i2dswyjxppzvqnsi5"
					alt="suitcase icon"
					loading="lazy"
				/>
			</div>

			{/* SECOND SECTION */}
			<div
				className={`h-4/6 p-8 pt-0 text-sm text-pgray flex flex-col ${size}p-8 ${size}flex-row ${size}justify-between ${size}items-center`}
			>
				{elements.map((e) => {
					return (
						<div
							className={`flex gap-6 || ${size}flex-col ${size}gap-0.5`}
							key={e.position}
						>
							<div
								className={`flex items-center w-16 justify-between gap-6 || ${size}flex-row-reverse`}
							>
								<span>{e.year}</span>
								<img
									src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/illnlzrwjxt1qiknrfs3"
									alt="dot icon"
									loading="lazy"
									className="h-2 w-2"
								/>
							</div>
							<div>
								<h4 className="font-medium text-pwhite">{e.position}</h4>
								<span>{e.site}</span>
							</div>
						</div>
					);
				})}
			</div>
		</article>
	);
};

export default Timeline;
