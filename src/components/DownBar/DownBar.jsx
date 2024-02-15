import React from "react";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider } from "@mui/material";

const DownBar = () => {
	const style = {
		footer: "fixed bottom-4 w-full left-0 h-14 flex justify-center z-10",
		downBar:"glassmorphism w-72 h-full rounded-xl flex justify-evenly gap-1.5 ",
		icons: " flex justify-center items-center rounded-xl text-white "
	};

	return (
		<footer className={style.footer}>
			<div className={style.downBar}>
				<div className="grid grid-cols-3 gap-1.5 p-1.5  w-3/5 ">
					<div className={ style.icons + "bg-blue-600 "}><Person2RoundedIcon/></div>
					<div className={ style.icons + "bg-sky-600 "}><ImportContactsRoundedIcon/></div>
					<div className={ style.icons + "bg-sky-400 "}><SmsRoundedIcon/></div>
				</div>
				<Divider orientation="vertical" variant="middle" flexItem />
				<div className="grid grid-cols-2 gap-1.5 p-1.5 w-2/5">
					<div className={ style.icons + " bg-gray-700"}><GitHubIcon/></div>
					<div className={ style.icons + "bg-blue-500 "}><LinkedInIcon/></div>
				</div>
			</div>
		</footer>
	);
};

export default DownBar;
