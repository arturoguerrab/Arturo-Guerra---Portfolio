import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ButtonLink from "../../../utils/ButtonLink";

const Certification = () => {
	return (
		<div className="h-full">
			<div className="bg-pblack h-20 xl:h-24 flex justify-between p-5 xl:p-8 rounded-t-3xl ">
				<div>
					<h3 className="text-pgreen font-semibold text-xs xl:text-sm">
						CERTIFICATION
					</h3>
					<h2 className="font-bold text-2xl text-white">MERN Stack</h2>
				</div>
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/asp4evuo55net3m3z5dv"
					alt="certification icon"
				/>
			</div>
			<div className="bg-[#121212d1] h-4/6 p-5 pt-2 xl:p-8 xl:pt-6  rounded-b-3xl ">
				<Swiper
					direction={"vertical"}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					style={{
						"--swiper-pagination-color": "#4ab960",
						"--swiper-pagination-bullet-inactive-color": "#9ba5b7",
						"--swiper-pagination-bullet-inactive-opacity": "1"
					}}
					className="mySwiper "
				>
					<SwiperSlide className="flex justify-start gap-8 items-center">
						<img
							className="w-20 h-20 xl:w-24 rounded-xl"
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/certifications/ooiyuc2fwnyyjmx0sraj"
							alt="certificate image"
						/>
						<div className="w-36 xl:w-auto  ">
							<div className="flex flex-col gap-2 xl:gap-10 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-sm xl:text-xl text-pwhite ">
										Full Stack Development
									</h4>
									<span className="text-sm xl:text-base text-pgray ">
										2023. Coderhouse
									</span>
								</div>
								<ButtonLink to={'https://www.coderhouse.com/ar/certificados/63719990a5c2a5000e843933?lang=en'} text={'View'} />
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="flex justify-start gap-8 items-center">
						<img
							className="w-20 h-20 xl:w-24 rounded-xl"
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/certifications/ooiyuc2fwnyyjmx0sraj"
							alt="certificate image"
						/>
						<div className="w-36 xl:w-auto  ">
							<div className="flex flex-col gap-2 xl:gap-10 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-sm xl:text-xl text-pwhite ">
										Full Stack Development
									</h4>
									<span className="text-sm xl:text-base text-pgray ">
										2023. Coderhouse
									</span>
								</div>
								<ButtonLink to={'https://www.coderhouse.com/ar/certificados/63719990a5c2a5000e843933?lang=en'} text={'View'} />
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="flex justify-start gap-8 items-center">
						<img
							className="w-20 h-20 xl:w-24 rounded-xl"
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/certifications/ooiyuc2fwnyyjmx0sraj"
							alt="certificate image"
						/>
						<div className="w-36 xl:w-auto  ">
							<div className="flex flex-col gap-2 xl:gap-10 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-sm xl:text-xl text-pwhite ">
										Full Stack Development
									</h4>
									<span className="text-sm xl:text-base text-pgray ">
										2023. Coderhouse
									</span>
								</div>
								<ButtonLink to={'https://www.coderhouse.com/ar/certificados/63719990a5c2a5000e843933?lang=en'} text={'View'} />
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="flex justify-start gap-8 items-center">
						<img
							className="w-20 h-20 xl:w-24 rounded-xl"
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/certifications/ooiyuc2fwnyyjmx0sraj"
							alt="certificate image"
						/>
						<div className="w-36 xl:w-auto  ">
							<div className="flex flex-col gap-2 xl:gap-10 xl:flex-row  ">
								<div>
									<h4 className="font-semibold text-sm xl:text-xl text-pwhite ">
										Full Stack Development
									</h4>
									<span className="text-sm xl:text-base text-pgray ">
										2023. Coderhouse
									</span>
								</div>
								<ButtonLink to={'https://www.coderhouse.com/ar/certificados/63719990a5c2a5000e843933?lang=en'} text={'View'} />
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Certification;
