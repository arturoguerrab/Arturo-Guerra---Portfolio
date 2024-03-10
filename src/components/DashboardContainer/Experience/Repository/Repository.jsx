import React from "react";
import ButtonLink from "../../../utils/ButtonLink";

const Repository = () => {
	return (
		<div className='bg-[url("https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iS6xoG4vb_sc/v3/400x225.jpg")] 2xl:bg-none h-full rounded-3xl'>
			<div className="bg-[#121212b8] 2xl:bg-pblack h-full rounded-3xl 2xl:flex 2xl:justify-between ">
				<img
					className="hidden 2xl:flex w-1/3 rounded-s-3xl"
					src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iS6xoG4vb_sc/v3/400x225.jpg"
					alt="github image"
					loading="lazy"
				/>

				<div className="flex flex-col justify-between h-full p-5 2xl:p-8 ">
					<div className="flex justify-between">
						<h3 className="text-pgreen text-sm  font-semibold">PROJECTS</h3>
						<img
							className="h-5 -mb-10"
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/ycgiiaqbiyymvrzip0qm"
							alt="code icon"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col 2xl:h-32 justify-between 2xl:justify-normal">
						<h2 className="font-bold text-white text-2xl 2xl:pt-5">
							Github Repository
						</h2>
						<span className="text-sm font-normal text-pgray pb-6">
							I am a frontend developer with experience in React. I'm good at
						</span>
						<ButtonLink
							to={"https://github.com/arturoguerrab?tab=repositories"}
							text={"Visit"}
							style={"2xl:text-base"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Repository;
