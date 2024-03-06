import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Certification = () => {
	return (
		<div className="h-full">
			<div className="bg-black h-2/6 flex justify-between p-5  rounded-t-3xl ">
				<div>
					<h3 className="text-green-400 font-semibold text-xs">
						CERTIFICATION
					</h3>
					<h2 className="font-bold text-xl text-white">MERN Stack</h2>
				</div>
				<img
					className="w-6 h-6"
					src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
					alt=""
				/>
			</div>
			<div className="bg-[#000000b5] h-4/6 p-3 rounded-b-3xl ">
				<Swiper
					direction={"vertical"}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					style={{
						"--swiper-pagination-color": "#4ab960",
					}}
					className="mySwiper"
				>
					<SwiperSlide className="flex justify-around items-center">
						<img
							className="w-20 h-20"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<div className="w-2/4 xl:w-2/3  ">
							<div className="flex flex-col gap-2 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-lg   text-white ">
										Full Stack Development
									</h4>
									<span className="text-sm text-gray-300 ">
										2023. Coderhouse
									</span>
								</div>
								<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7">
									Visit
								</button>
							</div>
							<p className="text-white hidden xl:inline-block ">
								I am a frontend developer with experience in React. I'm good at
								HTML and CSS, as well as JavaScript
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className="flex justify-around items-center">
						<img
							className="w-20 h-20"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<div className="w-2/4 xl:w-2/3  ">
							<div className="flex flex-col gap-2 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-lg   text-white ">
										Full Stack Development
									</h4>
									<span className="text-sm text-gray-300 ">
										2023. Coderhouse
									</span>
								</div>
								<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7">
									Visit
								</button>
							</div>
							<p className="text-white hidden xl:inline-block ">
								I am a frontend developer with experience in React. I'm good at
								HTML and CSS, as well as JavaScript
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className="flex justify-around items-center">
						<img
							className="w-20 h-20"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<div className="w-2/4 xl:w-2/3  ">
							<div className="flex flex-col gap-2 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-lg   text-white ">
										Full Stack Development
									</h4>
									<span className="text-sm text-gray-300 ">
										2023. Coderhouse
									</span>
								</div>
								<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7">
									Visit
								</button>
							</div>
							<p className="text-white hidden xl:inline-block ">
								I am a frontend developer with experience in React. I'm good at
								HTML and CSS, as well as JavaScript
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className="flex justify-around items-center">
						<img
							className="w-20 h-20"
							src="https://cdn-icons-png.freepik.com/512/6915/6915987.png"
							alt=""
						/>
						<div className="w-2/4 xl:w-2/3  ">
							<div className="flex flex-col gap-2 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-lg   text-white ">
										Full Stack Development
									</h4>
									<span className="text-sm text-gray-300 ">
										2023. Coderhouse
									</span>
								</div>
								<button className="bg-green-400 rounded-full text-white font-bold w-20 h-7">
									Visit
								</button>
							</div>
							<p className="text-white hidden xl:inline-block ">
								I am a frontend developer with experience in React. I'm good at
								HTML and CSS, as well as JavaScript
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Certification;
