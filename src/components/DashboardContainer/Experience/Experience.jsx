import React from "react";
import Repository from "./Repository/Repository";
import SectionDivider from "../../utils/SectionDivider";
import WhimsyContainer from "./Projects/WhimsyContainer";
import ExpressAPIContainer from "./Projects/ExpressAPIContainer";
import PortfolioContainer from "./Projects/PortfolioContainer";
import { useTranslation } from "react-i18next";
import CertificationContainer from "./Certifications/CertificationContainer";

const Experience = () => {
	const { t } = useTranslation("global");
	return (
		<div id="experience">
			<SectionDivider section={'experience'} title={t("divider.experience")}/>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-a8 md:grid-rows-a5 xl:grid-rows-a3 gap-8 pb-8">
				<div className="col-span-1 row-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-2 rounded-3xl ">
					<PortfolioContainer />
				</div>
				<div className="col-span-1 md:col-start-2 xl:col-span-2 rounded-3xl">
					<CertificationContainer/>
				</div>
				<div className="col-span-1 row-span-2 md:row-start-3 xl:row-start-2 xl:col-start-2 2xl:col-start-3   rounded-3xl ">
					<WhimsyContainer />
				</div>
				<div className="col-span-1 row-span-2 rounded-3xl ">
					<ExpressAPIContainer />
				</div>
				<div className="col-span-1 2xl:col-span-2 rounded-3xl">
					<Repository/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
