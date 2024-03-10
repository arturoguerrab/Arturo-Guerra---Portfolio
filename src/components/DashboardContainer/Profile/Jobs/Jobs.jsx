import React from "react";

const Jobs = () => {
	return (
		<div className="h-full bg-pblack rounded-3xl">
			{/* FIRST SECTION */}
			<div className="h-2/6 p-5 xl:p-8 flex justify-between ">
				<div>
					<h3 className="text-pgreen font-semibold text-xs xl:text-base ">
						EXPERIENCE
					</h3>
					<h2 className="font-bold text-2xl xl:text-3xl text-pwhite">Jobs</h2>
				</div>
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/vg0i2dswyjxppzvqnsi5"
					alt="suitcase icon"
					loading="lazy"
				/>
			</div>

			{/* SECOND SECTION */}
			<div className=" h-4/6 p-8 pt-0 xl:p-8 text-sm text-pgray flex flex-col xl:flex-row xl:justify-between xl:items-center">
				{/* FIRST ELEMENT */}
				<div className="flex  gap-6 xl:flex-col xl:gap-0.5">
					<div className="flex items-center w-16 justify-between gap-6 xl:flex-row-reverse">
						<span>2023</span>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/illnlzrwjxt1qiknrfs3"
							alt="dot icon"
							loading="lazy"
							className="h-2"
						/>
					</div>
					<div className="">
						<h3 className="font-medium text-pwhite">
							Apple Expert
						</h3>
						<span>iPoint, Apple APR</span>
					</div>
				</div>

				{/* SECOND ELEMENT */}
				<div className="flex gap-6 xl:flex-col xl:gap-0.5">
					<div className="flex items-center w-16 justify-between gap-6 xl:flex-row-reverse">
						<span>2022</span>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/illnlzrwjxt1qiknrfs3"
							alt="dot icon"
							loading="lazy"
							className="h-2"
						/>
					</div>
					<div className="">
						<h3 className="font-medium text-pwhite">Commercial Advisor</h3>
						<span>iPoint, Apple APR</span>
					</div>
				</div>

				{/* THIRD ELEMENT */}
				<div className="flex gap-6 xl:flex-col xl:gap-0.5">
					<div className="flex items-center w-16 justify-between gap-6 xl:flex-row-reverse">
						<span>2019</span>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/illnlzrwjxt1qiknrfs3"
							alt="dot icon"
							loading="lazy"
							className="h-2"
						/>
					</div>
					<div className="">
						<h3 className="font-medium text-pwhite">Technical Service</h3>
						<span>Fix Station</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jobs;
