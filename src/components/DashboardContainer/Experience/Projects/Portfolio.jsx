import Divider from "@mui/material/Divider";
import React from "react";
import ButtonLink from "../../../utils/ButtonLink";
import { GitHub } from "@mui/icons-material";

const Portfolio = () => {
	const stack = [
		{
			name: "JavaScript",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/utm7ukexzfssbgjohchg",
		},
		{
			name: "ReactJS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/tfvxrtgdropsm1nyuptl",
		},
		{
			name: "Tailwind",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/lysxqdv6dugrouvueblr",
		},
		{
			name: "GIT",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/bpoxzcyhlmwr0ikgrpoz",
		},
		{
			name: "NPM",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/qy00oxhjzvdwm5qn5cl0",
		},
	];

	return (
		<div className="h-full ">
			<div className="bg-[url('https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ea6lanvn9rnatva9ws4m')] bg-cover  h-56 rounded-t-3xl p-5 flex justify-end md:h-40 md:p-8 xl:h-56 xl:p-5 2xl:h-40 2xl:p-8 ">
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/pchxneqiokx1pqmn3fyo"
					alt="image of the project Portfolio"
					loading="lazy"
				/>
			</div>
			<div className="bg-pwhite h-2/4 rounded-b-3xl p-5 flex flex-col justify-between md:h-72 md:p-8 xl:h-2/4 xl:p-5 2xl:h-72 2xl:p-8">
				<div className="flex flex-col">
					<h3 className="text-pgreen font-semibold text-sm md:text-base md:pb-3 xl:text-sm xl:pb-0 2xl:text-base 2xl:pb-3 ">
						PROJECTS
					</h3>
					<h2 className="font-bold text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl">Portfolio</h2>
					<span className="text-sm font-light text-pgray md:text-base xl:text-sm 2xl:text-base ">
						Lorem, ipsum dolor{" "}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="w-4/6 text-sm md:text-base xl:text-sm 2x:text-base">
						I am a frontend developer with experience in React. I'm good at HTML
						and CSS
					</p>
					<ButtonLink
						to={"https://whimsystore.netlify.app/"}
						text={"Visit"}
						style={"md:h-9 md:w-28 md:rounded-2xl md:text-base xl:w-20 xl:h-7 xl:text-sm 2xl:h-9 2xl:w-28 2xl:rounded-2xl 2xl:text-base"}
					/>
				</div>
				<Divider />
				<div className="flex items-center justify-between ">
					<div className=" flex gap-3">
						{stack.map((e) => {
							return (
								<img
									className="h-5 md:h-7 xl:h-5 2xl:h-7 shadow-md rounded-md "
									src={e.img}
									alt={e.name + " icon"}
									key={e.name}
									loading="lazy"
								/>
							);
						})}
					</div>
					<a
						href="https://github.com/arturoguerrab/Whimsy-Store-JS"
						className="text-sm text-center flex items-center text-pgray "
						target="_blank"
					>
						<GitHub sx={{ height: 16 }} />
						Github {">"}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
