import React from "react";

const Project = ({ bg, title, subtitle, description, icons }) => {
	return (
		<div className="h-full ">
			<div
				className={`flex justify-end h-2/5 p-6 rounded-t-3xl bg-[url(${bg})] bg-cover `}
			>
				<img
					className="w-6 h-6"
					src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-between h-3/5 p-6 rounded-b-3xl bg-[#ffffffa6]  ">
				<div>
					<h3 className="text-green-400 font-semibold">PROJECTS</h3>
					<h2 className="font-bold text-3xl">{title}</h2>
					<span className="text-gray-400 font-light text-sm">{subtitle}</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="w-4/6 text-xs">{description}</p>
					<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7">
						Visit
					</button>
				</div>
				<Divider />
				<div className="flex items-center justify-between ">
					<div className=" flex gap-3">
						{icons.map((element) => {
							return (
								<img
									className="w-6 h-6"
									src={`${element.img}`}
									alt={`Icono de ${element.name} `}
                                    key={element.name}
								/>
							);
						})}
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

export default Project;
