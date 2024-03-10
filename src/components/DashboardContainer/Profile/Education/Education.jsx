import React from 'react'

const Education = () => {
  return (
    <div className="h-full bg-pblack rounded-3xl">
			{/* FIRST SECTION */}
			<div className="h-2/6 p-5 2xl:p-8 flex justify-between ">
				<div>
					<h3 className="text-pgreen font-semibold text-xs 2xl:text-base ">
						EXPERIENCE
					</h3>
					<h2 className="font-bold text-2xl 2xl:text-3xl text-pwhite">Education</h2>
				</div>
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/vg0i2dswyjxppzvqnsi5"
					alt="suitcase icon"
					loading="lazy"
				/>
			</div>

			{/* SECOND SECTION */}
			<div className=" h-4/6 p-8 pt-0 2xl:p-8 text-sm text-pgray flex flex-col 2xl:flex-row 2xl:justify-between ">
				{/* FIRST ELEMENT */}
				<div className="flex  gap-6 2xl:flex-col 2xl:gap-0.5">
					<div className="flex items-center w-16 justify-between gap-6 2xl:flex-row-reverse">
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
							Full Stack Web Developer
						</h3>
						<span>Coderhouse</span>
					</div>
				</div>

				{/* SECOND ELEMENT */}
				<div className="flex gap-6 2xl:flex-col 2xl:gap-0.5">
					<div className="flex items-center w-16 justify-between gap-6 2xl:flex-row-reverse">
						<span>2020</span>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/illnlzrwjxt1qiknrfs3"
							alt="dot icon"
							loading="lazy"
							className="h-2"
						/>
					</div>
					<div className="">
						<h3 className="font-medium text-pwhite">Web Development</h3>
						<span>Coderhouse</span>
					</div>
				</div>

				{/* THIRD ELEMENT */}
				<div className="flex gap-6 2xl:flex-col 2xl:gap-0.5">
					<div className="flex items-center w-16 justify-between gap-6 2xl:flex-row-reverse">
						<span>2015</span>
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/illnlzrwjxt1qiknrfs3"
							alt="dot icon"
							loading="lazy"
							className="h-2"
						/>
					</div>
					<div className="">
						<h3 className="font-medium text-pwhite">Civil Engineering</h3>
						<span>Universidad Santa Maria</span>
					</div>
				</div>
			</div>
		</div> 
  )
}

export default Education