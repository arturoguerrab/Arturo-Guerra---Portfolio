import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider } from "@mui/material";
import DownBarButtons from "./DownBarButtons/DownBarButtons";

const DownBar = () => {
	const style = {
		footer: "fixed bottom-8 w-full left-0 h-14 flex justify-center z-10",
		downBar:
			"glassmorphism w-72 h-full rounded-xl flex justify-evenly gap-1.5 ",
	};

	return (
		<footer className={style.footer}>
			<div className={style.downBar}>
				<div className="grid grid-cols-3 gap-1.5 p-1.5  w-3/5 ">
					<DownBarButtons to={'profile'} className={'bg-blue-600'}/>
					<DownBarButtons to={'experience'} className={'bg-sky-600'}/>
					<DownBarButtons to={'contact'} className={'bg-sky-400'}/>
				</div>
				<Divider orientation="vertical" variant="middle" flexItem />
				<div className="grid grid-cols-2 gap-1.5 p-1.5 w-2/5">
					<a href="https://github.com/arturoguerrab" target="_blank" className={" flex justify-center items-center rounded-xl text-white bg-gray-700"}>
						<GitHubIcon />
					</a>
					<a href="https://www.linkedin.com/in/arturoguerrab/" target="_blank" className={ " flex justify-center items-center rounded-xl text-white bg-blue-500 "}>
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default DownBar;
