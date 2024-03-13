import React from "react";
import ButtonLink from "../../../utils/ButtonLink";
import { useTranslation } from "react-i18next";

const Repository = () => {
	const { t } = useTranslation("global");

	return (
		<div className='bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/x4r0kh3zexawweyxha2v")] bg-cover 2xl:bg-none h-full rounded-3xl'>
			<div className="bg-[#121212b8] 2xl:bg-pblack h-full rounded-3xl 2xl:flex 2xl:gap-2 ">
				<img
					className="hidden 2xl:flex w-1/3 rounded-s-3xl"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/x4r0kh3zexawweyxha2v"
					alt="github image"
					loading="lazy"
				/>

				<div className="flex flex-col justify-between h-full w-full p-5 2xl:p-8 ">
					<div className="flex justify-between -mb-4">
						<h3 className="text-pgreen text-xs 2xl:text-base  font-semibold">{t("experience.projects.projects")}</h3>
						<img
							className="h-5"
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/ycgiiaqbiyymvrzip0qm"
							alt="code icon"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col 2xl:h-32 justify-between">
						<h2 className="font-bold text-white mb-1 text-2xl 2xl:pt-5">
							{t("experience.github.title")}
						</h2>
						<span className="text-sm font-normal text-pgray pb-6">
							{t("experience.github.sub")}
						</span>
						<ButtonLink
							to={"https://github.com/arturoguerrab?tab=repositories"}
							text={t("experience.projects.button")}
							style={"2xl:text-base -mt-3"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Repository;
