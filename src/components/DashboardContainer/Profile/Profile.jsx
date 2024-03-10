import React from "react";
import Presentation from "./Presentation/Presentation";
import Jobs from "./Jobs/Jobs";
import Education from "./Education/Education";
import SectionDivider from "../../utils/SectionDivider";
import SkillsContainer from "./Skills/SkillsContainer";

const  Profile = () => {
	return (
		<div id="profile" className="mt-8">
			<SectionDivider section={'profile'} title={'Profile'}/>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-a6 md:grid-rows-a3 lg:grid-rows-a5 xl:grid-rows-a3 gap-8 pb-8">
				<div className="row-start-1 row-span-2 lg:col-span-2">
					<Presentation />
				</div>
				<div className="xl:col-span-2 xl:col-start-2 2xl:row-start-1 2xl:col-start-3   ">
					<Jobs/>
				</div>
				<div className="row-span-2 lg:col-span-2 lg:row-start-4 xl:col-span-1 xl:row-start-1 xl:col-start-3 2xl:col-span-2 2xl:row-start-2 rounded-3xl   ">
					<SkillsContainer />
				</div>
				<div className="xl:row-start-3 2xl:col-span-2 ">
					<Education/>
				</div>
			</div>
		</div>
	);
};

export default Profile;
