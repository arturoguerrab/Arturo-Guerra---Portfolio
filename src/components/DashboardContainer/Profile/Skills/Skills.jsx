import React from "react";
import { useTranslation } from "react-i18next";

const Skills = ({ props }) => {
	const { t } = useTranslation("global");
	return (
		<article className="h-full w-full flex flex-col">
			<div className="h-1/4 p-6 rounded-t-3xl flex justify-between bg-pwhite || lg:h-2/5 || xl:h-1/4 || 2xl:h-2/5  ">
				<div className="lg:self-end || xl:self-auto || 2xl:self-end">
					<h3 className="text-pgreen font-semibold text-xs || lg:text-base || xl:text-xs || 2xl:text-base ">
						{t("profile.skills.skills")}
					</h3>
					<h2 className="font-bold text-2xl || lg:text-3xl || xl:text-2xl || 2xl:text-3xl">
						Stack
					</h2>
					<span className="text-sm text-pgray || lg:text-base || xl:text-sm || 2xl:text-base">
						{t("profile.skills.sub")}
					</span>
				</div>
				<img
					className="h-5 w-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/hu3yuhwo0kzumttwl7kj"
					alt="hammer icon"
					loading="lazy"
				/>
			</div>
			<div className="glassWhite h-3/4 p-5 rounded-b-3xl grid grid-cols-4 place-items-center || lg:h-3/5 lg:grid-cols-7 lg:p-8 || xl:h-3/4 xl:grid-cols-4 xl:p-5 || 2xl:h-3/5 2xl:grid-cols-7 2xl:p-8">
				{props.stack.map((e) => {
					return (
						<img
							className="h-12 w-12 || lg:w-16 lg:h-16 | xl:w-12 xl:h-12 || 2xl:h-16 2xl:w-16 "
							src={e.img}
							alt={e.name + " icon"}
							key={e.name}
							loading="lazy"
						/>
					);
				})}
			</div>
		</article>
	);
};

export default Skills;
