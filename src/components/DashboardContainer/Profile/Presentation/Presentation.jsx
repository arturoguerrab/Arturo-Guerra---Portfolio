import React from "react";
import { Link } from "react-scroll";
import DownloadResumeContainer from "../../../StateBar/StateBarComponents/DownloadResume/DownloadResumeContainer";

const Presentation = () => {
	return (
		<div className="flex flex-col lg:flex-row h-full w-full">
			<div className="p-5 lg:p-8 flex justify-between lg:items-center rounded-t-3xl lg:rounded-none lg:rounded-s-3xl glassWhite">
				<img
					className=" w-20 lg:w-44 lg:h-44"
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ky1tn5e7y76gubgcxume"
					alt="picture of Arturo Guerra"
					loading="lazy"
				/>
				<img
					className="h-5 lg:hidden "
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/yfesfuir9ytbckws9li8"
					alt="profile icon"
					loading="lazy"
				/>
			</div>
			<div className="bg-pwhite h-full p-5 lg:w-4/6 lg:p-8 flex flex-col lg:justify-between  gap-3 rounded-b-3xl lg:rounded-none lg:rounded-r-3xl   ">
				<img
					className="h-5 hidden lg:inline lg:w-5 self-end -mb-10  "
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/iconos%20de%20tarjeta/yfesfuir9ytbckws9li8"
					alt="profile icon"
					loading="lazy"
				/>
				<div className="flex flex-col lg:gap-1">
					<h1 className="font-bold text-2xl lg:text-4xl   ">Arturo Guerra</h1>
					<h2 className="lg:text-xl">Full Stack Web Developer</h2>
					<div className="flex items-baseline gap-1.5  ">
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/mzgrfk8tryzyhighdqvo"
							alt="location icon"
							loading="lazy"
							className="h-2.5 lg:h-3"
						/>
						<span className="text-sm lg:text-base pt-1 lg:pt-2">
							Buenos Aires, Argentina
						</span>
					</div>
				</div>
				<p className="text-sm lg:text-base ">
					I am a frontend developer with experience in React. I'm good at HTML
					and CSS, as well as JavaScript. I love learning new things and
					experimenting with new technologies. I have a good eye for details and
					I always put my all into my work.
				</p>
				<div className="flex flex-col pt-2.5 gap-3">
					<div className="flex h-5 gap-4 ">
						<a href="https://github.com/arturoguerrab" target="_blank">
							<img
								className="h-5 lg:h-6"
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
								className="h-5 lg:h-6"
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
									className="h-5 lg:h-6"
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
		</div>
	);
};

export default Presentation;
