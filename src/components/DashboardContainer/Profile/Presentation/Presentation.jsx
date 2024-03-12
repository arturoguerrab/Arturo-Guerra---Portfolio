import React from "react";
import { Link } from "react-scroll";
import DownloadResumeContainer from "../../../StateBar/StateBarComponents/DownloadResume/DownloadResumeContainer";
import { useTranslation } from "react-i18next";

const Presentation = () => {
	const { t } = useTranslation("global");
	return (
		<article className="h-full flex flex-col || lg:flex-row">
			<div className="p-5 flex justify-between rounded-t-3xl glassWhite || lg:p-8 lg:items-center lg:rounded-none lg:rounded-s-3xl">
				<img
					className="w-20 h-20 || lg:w-44 lg:h-44"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ky1tn5e7y76gubgcxume"
					alt="picture of Arturo Guerra"
					loading="lazy"
				/>
				<img
					className="h-5 w-5 || lg:hidden "
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/yfesfuir9ytbckws9li8"
					alt="profile icon"
					loading="lazy"
				/>
			</div>
			<div className="h-full p-5 flex flex-col gap-3 rounded-b-3xl bg-pwhite || lg:w-4/6 lg:p-8 lg:justify-between lg:rounded-none lg:rounded-r-3xl">
				<img
					className="h-5 w-5 self-end -mb-10 hidden || lg:inline lg:w-5"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/yfesfuir9ytbckws9li8"
					alt="profile icon"
					loading="lazy"
				/>
				<div className="flex flex-col || lg:gap-1">
					<h1 className="font-bold text-2xl || lg:text-4xl">Arturo Guerra</h1>
					<h2 className="lg:text-xl">{t("profile.presentation.sub")}</h2>
					<div className="flex items-baseline gap-1.5  ">
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/mzgrfk8tryzyhighdqvo"
							alt="location icon"
							loading="lazy"
							className="h-2.5 w-2.5 || lg:h-3 lg:w-3"
						/>
						<p className="text-sm pt-1 || lg:text-base lg:pt-2">
							Buenos Aires, Argentina
						</p>
					</div>
				</div>
				<p className="text-sm || lg:text-base ">
					{t("profile.presentation.description")}
				</p>
				<div className="flex flex-col pt-2.5 gap-3">
					<div className="flex h-5 gap-4 || lg:h-6">
						<a href="https://github.com/arturoguerrab" target="_blank">
							<img
								className="h-5 w-5 || lg:h-6 lg:w-6"
								src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/py6x0xvgvu7mvzbsas7j"
								alt="github icon"
								loading="lazy"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/arturoguerrab/"
							target="_blank"
						>
							<img
								className="h-5 w-5 || lg:h-6 lg:w-6"
								src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/skzo9hamsh8jdmfrfbyi"
								alt="linkedin icon"
								loading="lazy"
							/>
						</a>
						<Link
							to={`contact`}
							spy={true}
							smooth={true}
							offset={-68}
							duration={500}
						>
							<button>
								<img
									className="h-5 w-5 || lg:h-6 lg:w-6"
									src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/zbkx2uegcuxu4p5lulfn"
									alt="contact icon"
									loading="lazy"
								/>
							</button>
						</Link>
					</div>
					<DownloadResumeContainer profile={true} />
				</div>
			</div>
		</article>
	);
};

export default Presentation;
