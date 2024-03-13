import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ButtonLink from "../../../utils/ButtonLink";
import { useTranslation } from "react-i18next";

const Certification = ({ elements }) => {
	const { t } = useTranslation("global");
	return (
		<div className="h-full">
			<div className="bg-pblack h-20 xl:h-24 flex justify-between p-5 xl:p-8 rounded-t-3xl ">
				<div>
					<h3 className="text-pgreen font-semibold text-xs xl:text-sm">
						{t("experience.certification.name")}
					</h3>
					<h2 className="font-bold text-2xl text-white">MERN Stack</h2>
				</div>
				<img
					className="h-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/asp4evuo55net3m3z5dv"
					alt="certification icon"
				/>
			</div>
			<div className="bg-[#121212d1] h-32 p-5 pt-2 xl:px-8 xl:h-28   rounded-b-3xl ">
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
						"--swiper-pagination-bullet-inactive-opacity": "1",
					}}
					className="mySwiper relative z-0 "
				>
					{elements.map((e) => {
						return (
							<SwiperSlide className="grid grid-cols-3 xl:flex xl:gap-7 items-center" key={e.title}>
								<img
									className="w-20 h-20 xl:w-24 rounded-xl"
									src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/certifications/ooiyuc2fwnyyjmx0sraj"
									alt="certificate image"
								/>
								<div className="w-40 xl:w-96">
									<div className="flex flex-col gap-2 xl:flex-row ">
										<div className="xl:w-60">
											<h4 className="font-semibold text-sm xl:text-xl text-pwhite ">
												{e.title}
											</h4>
											<span className="text-xs font-medium xl:text-sm text-pwhite ">
												2023. Coderhouse
											</span>
										</div>
										<ButtonLink
											to={e.link}
											text={t("experience.certification.btn")}
										/>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default Certification;
