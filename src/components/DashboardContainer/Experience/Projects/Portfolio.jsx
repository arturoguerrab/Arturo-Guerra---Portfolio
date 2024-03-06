import { Divider } from "@mui/material";
import React from "react";

const Portfolio = () => {
	return (
		<div className="h-full ">
			<div className="bg-[url('https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ea6lanvn9rnatva9ws4m')] bg-cover  h-2/5 rounded-t-3xl p-6 flex justify-end ">
				<img
					className="w-6 h-6"
					src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					alt=""
				/>
			</div>
			<div className="bg-[#ffffffa6] h-3/5 rounded-b-3xl p-6 flex flex-col justify-between  ">
				<div>
					<h3 className="text-green-400 font-semibold">Projects</h3>
					<h2 className="font-bold text-3xl">Portfolio</h2>
					<span className="text-sm font-light text-gray-400 ">
						Lorem, ipsum dolor{" "}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="w-4/6 text-xs">
						I am a frontend developer with experience in React. I'm good at HTML
						and CSS, as well as JavaScript. I love learning new things and
						experimenting with new technologies.
					</p>
					<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7">
						Visit
					</button>
				</div>
				<Divider />
				<div className="flex items-center justify-between ">
					<div className=" flex gap-3">
						<img
							className="w-6 h-6"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<img
							className="w-6 h-6"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<img
							className="w-6 h-6"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<img
							className="w-6 h-6"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<img
							className="w-6 h-6"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
					</div>
					<a href="#" className="text-xs flex gap-1 items-center ">
						<img
							className="w-3 h-3"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
