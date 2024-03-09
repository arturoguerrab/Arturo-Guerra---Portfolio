import React from "react";
import Whimsy from "./Projects/Whimsy";
import ExpressAPI from "./Projects/ExpressAPI";
import Portfolio from "./Projects/Portfolio";
import Certification from "./Certifications/Certification";
import Repository from "./Repository/Repository";
import SectionDivider from "../../utils/SectionDivider";

const Experience = () => {
	return (
		<div id="experience">
			<SectionDivider section={'experience'} title={'Projects & Certifications'}/>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-a8 md:grid-rows-a5 xl:grid-rows-a3 gap-8 pb-8">
				<div className="col-span-1 row-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-2 rounded-3xl ">
					<Portfolio />
				</div>
				<div className="col-span-1 md:col-start-2 xl:col-span-2 rounded-3xl">
					<Certification/>
				</div>
				<div className="col-span-1 row-span-2 md:row-start-3 xl:row-start-2 xl:col-start-2 2xl:col-start-3   rounded-3xl ">
					<Whimsy />
				</div>
				<div className="col-span-1 row-span-2 rounded-3xl ">
					<ExpressAPI />
				</div>
				<div className="col-span-1 2xl:col-span-2 rounded-3xl">
					<Repository/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
