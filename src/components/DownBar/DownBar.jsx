import React from "react";
import { Divider } from "@mui/material";
import DownBarButtons from "./DownBarButtons/DownBarButtons";

const DownBar = () => {
	return (
		<footer className="fixed bottom-8 w-full left-0 h-[62px] flex justify-center z-10 ">
			<div className="glassmorphism w-72 h-full rounded-xl flex justify-evenly gap-1.5 overflow-hidden ">
				<div className="grid grid-cols-3 gap-1.5 p-1.5  w-3/5 ">
					<DownBarButtons to={"profile"} />
					<DownBarButtons to={"experience"} />
					<DownBarButtons to={"contact"} />
				</div>
				<Divider orientation="vertical" variant="middle" flexItem />
				<div className="grid grid-cols-2 gap-1.5 p-1.5 w-2/5">
					<a
						href="https://github.com/arturoguerrab"
						target="_blank"
						className=" flex justify-center items-center rounded-xl"
					>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Dock/p7yb1pffjqirvaetq1c2"
							alt="github icon"
							loading="lazy"
							className="w-10 h-10"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/arturoguerrab/"
						target="_blank"
						className=" flex justify-center items-center rounded-xl"
					>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Dock/nqdbmlemarcbrem52noy"
							alt="linkedin icon"
							loading="lazy"
							className="w-10 h-10"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default DownBar;
