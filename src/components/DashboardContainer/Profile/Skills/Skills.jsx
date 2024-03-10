import React from "react";

const Skills = ({ props }) => {
	return (
		<div className="h-full w-full flex flex-col">
			<div className="bg-pwhite h-1/4 lg:h-2/5 xl:h-1/4 2xl:h-2/5  rounded-t-3xl flex p-6 justify-between ">
				<div className="lg:self-end xl:self-auto 2xl:self-end">
					<h3 className="text-pgreen font-semibold text-xs lg:text-base xl:text-xs 2xl:text-base ">
						SKILLS
					</h3>
					<h2 className="font-bold text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl">
						Stack
					</h2>
					<span className="text-sm lg:text-base xl:text-sm 2xl:text-base  font-light text-pgray ">
						Technologies & Languages
					</span>
				</div>
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/hu3yuhwo0kzumttwl7kj"
					alt="hammer icon"
					loading="lazy"
				/>
			</div>
			<div className="glassWhite h-3/4 lg:h-3/5 xl:h-3/4 2xl:h-3/5  rounded-b-3xl p-6 grid grid-cols-4 lg:grid-cols-7 xl:grid-cols-4 2xl:grid-cols-7 place-items-center  ">
				{props.stack == ""
					? props.skeleton(14)
					: props.stack.map((e) => {
							return (
								<img
									className="h-[3.25rem] lg:w-16 lg:h-16 xl:w-12 xl:h-12 2xl:h-16 2xl:w-16 "
									src={e.img}
									alt={e.name + " icon"}
									key={e.name}
									loading="lazy"
								/>
							);
					  })}
			</div>
		</div>
	);
};

export default Skills;
