import React from "react";
import Divider from "@mui/material/Divider";
import ButtonLink from "../../../utils/ButtonLink";
import { GitHub } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import './projects.css'

const Project = ({ props, icons, big }) => {
	const { t } = useTranslation("global");
	return (
		<article className="h-full ">
			<div
				className={
					`h-56 rounded-t-3xl p-5 flex justify-end ${props.bg} bg-cover ` +
					(big ? `md:h-40 md:p-8 || xl:h-56 xl:p-5 2xl:h-40 2xl:p-8` : "")
				}
			>
				<img
					className="h-5 w-3"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/pchxneqiokx1pqmn3fyo"
					alt="icon projects"
					loading="lazy"
				/>
			</div>
			<div
				className={
					"h-2/4 rounded-b-3xl p-5 flex flex-col justify-between bg-pwhite " +
					(big ? "md:h-72 md:p-8 || xl:h-2/4 xl:p-5 || 2xl:h-72 2xl:p-8" : "")
				}
			>
				<div className="flex flex-col">
					<h3
						className={
							"text-pgreen font-semibold text-xs " +
							(big
								? "md:text-base md:pb-3 xl:text-xs xl:pb-0 2xl:text-base 2xl:pb-3"
								: "")
						}
					>
						{t("experience.projects.projects")}
					</h3>
					<h2
						className={
							"font-bold text-2xl " +
							(big ? "md:text-3xl xl:text-2xl 2xl:text-3xl" : "")
						}
					>
						{props.title}
					</h2>
					<span
						className={
							"text-sm font-light text-pgray " +
							(big ? "md:text-base xl:text-sm 2xl:text-base" : "")
						}
					>
						{props.subtitle}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<p
						className={
							"w-4/6 text-sm " +
							(big ? "md:text-base xl:text-sm 2x:text-base" : "")
						}
					>
						{props.description}
					</p>
					<ButtonLink
						to={props.to}
						text={props.button}
						style={
							big
								? "md:h-9 md:w-28 md:rounded-2xl md:text-base xl:w-20 xl:h-7 xl:text-sm 2xl:h-9 2xl:w-28 2xl:rounded-2xl 2xl:text-base"
								: ""
						}
					/>
				</div>
				<Divider />
				<div className="flex items-center justify-between ">
					<div className=" flex gap-3">
						{icons.map((e) => {
							return (
								<img
									className={
										"h-5 w-5 shadow-md rounded-md " +
										(big ? "md:h-7 md:w-7 xl:h-5 xl:w-5 2xl:h-7 2xl:w-7" : "")
									}
									src={e.img}
									alt={e.name + " icon"}
									key={e.name}
									loading="lazy"
								/>
							);
						})}
					</div>
					<a
						href={props.repository}
						className="text-sm text-center flex items-center text-pgray "
						target="_blank"
					>
						<GitHub sx={{ height: 16 }} />
						Github {">"}
					</a>
				</div>
			</div>
		</article>
	);
};

export default Project;
