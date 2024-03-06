import React from "react";

const Presentation = () => {
	return (
		<div className="flex flex-col lg:flex-row h-full w-full">
			<div className="p-6 h-1/3 lg:w-2/5 lg:h-full flex justify-between lg:justify-center lg:items-center  rounded-t-3xl lg:rounded-none lg:rounded-s-3xl glassmorphism">
				<img
					className="h-24 lg:h-40  "
					src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					alt=""
				/>
				<img
					className="w-6 h-6 lg:hidden"
					src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					alt=""
				/>
			</div>
			<div className="bg-white flex flex-col h-2/3 lg:h-full lg:w-3/5 p-6 rounded-b-3xl lg:rounded-none lg:rounded-r-3xl   ">
				<img
					className="w-7 h-7 self-end hidden lg:inline  "
					src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					alt=""
				/>
				<div className="pt-">
					<h1 className="font-bold text-3xl lg:text-4xl">Arturo Guerra</h1>
					<h2 className="lg:text-2xl  ">Full Stack Web Developer</h2>
					<span className="text-xs lg:text-base ">Buenos Aires, Argentina</span>
				</div>
				<div className="flex flex-col lg:gap-5">
					<p className="text-sm my-4 lg:text-lg ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
						alias, eaque molestiae nostrum ea quae fugit consequuntur unde
						laboriosam
					</p>
					<div className="flex h-7 w-20 lg:w-28 lg:h-12 gap-4 ">
						<img
							className="w-1/3 h-4/5"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<img
							className="w-1/3 h-4/5"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<img
							className="w-1/3 h-4/5"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
					</div>
					<button className="bg-green-400 rounded-full px-2 w-20 lg:text-xl lg:w-28   self-end">
						Resume
					</button>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
