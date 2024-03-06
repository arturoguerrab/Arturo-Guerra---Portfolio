import React from "react";

const Repository = () => {
	return (
		<div className='bg-[url("https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iS6xoG4vb_sc/v3/400x225.jpg")] 2xl:bg-none h-full rounded-3xl'>
			<div className="bg-[#000000b8] h-full rounded-3xl 2xl:flex ">
				<img
					className="hidden 2xl:inline-block w-2/5 rounded-s-3xl "
					src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iS6xoG4vb_sc/v3/400x225.jpg"
					alt=""
				/>
				<div className="flex flex-col items-end h-full p-6">
					<img
						className="w-6 h-6"
						src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
						alt=""
					/>
					<div className="h-3/4 flex flex-col gap-1 justify-center ">
						<h3 className="text-green-400 text-xs  font-semibold">PROJECTS</h3>
						<h2 className="font-bold text-white text-xl">Github Repository</h2>
						<span className="text-sm font-light text-gray-400 ">
							I am a frontend developer with experience in React. I'm good at
							HTML and CSS
						</span>
						<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7 mt-3">
							Visit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Repository;
