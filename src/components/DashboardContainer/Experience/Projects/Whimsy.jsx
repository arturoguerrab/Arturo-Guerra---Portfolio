import Divider from "@mui/material/Divider";
import React from "react";
import ButtonLink from "../../../utils/ButtonLink";
import { GitHub } from "@mui/icons-material";

const Whimsy = () => {
	const stack = [
		{
			name: "JavaScript",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/utm7ukexzfssbgjohchg",
		},

		{
			name: "CSS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/j9jmek0d25izwhxgy58o",
		},

		{
			name: "SASS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/awltdsz0wr5dts9l3llw",
		},

		{
			name: "Bootstrap",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/sp9ycbb47zytgqmpukfs",
		},

		{
			name: "HTML",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/fd2yg4oqdkwrmzkzyamb",
		},
	];

	return (
		<div className="h-full ">
			<div className="bg-[url('https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ularpmrcqbfk0zc9z17g')] bg-cover  h-56 rounded-t-3xl p-5 flex justify-end ">
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/pchxneqiokx1pqmn3fyo"
					alt="image of the project Whimsy"
					loading="lazy"
				/>
			</div>
			<div className="bg-pwhite h-2/4 rounded-b-3xl p-5 flex flex-col justify-between  ">
				<div className="flex flex-col">
					<h3 className="text-pgreen font-semibold text-sm">PROJECTS</h3>
					<h2 className="font-bold text-2xl">Whimsy</h2>
					<span className="text-sm font-light text-pgray ">
						Lorem, ipsum dolor{" "}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="w-4/6 text-sm">
						I am a frontend developer with experience in React. I'm good at HTML
						and CSS
					</p>
					<ButtonLink to={"https://whimsystore.netlify.app/"} text={"Visit"} />
				</div>
				<Divider />
				<div className="flex items-center justify-between ">
					<div className=" flex gap-3">
						{stack.map((e) => {
							return (
								<img
									className="h-5 shadow-md rounded-md "
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

export default Whimsy;
