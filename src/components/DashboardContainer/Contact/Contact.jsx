import React from "react";
import SectionDivider from "../../utils/SectionDivider";

const Contact = () => {
	return (
		<div id="contact">
			<SectionDivider section={'contact'} title={'Contact'}/>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-a8 md:grid-rows-a5 xl:grid-rows-a3 gap-8 pb-8">
				<div className="bg-white col-span-1 row-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-2 rounded-3xl "></div>
				<div className="bg-black col-span-1 md:col-start-2 xl:col-span-2 rounded-3xl"></div>
				<div className="bg-green-200 col-span-1 row-span-2 md:row-start-3 xl:row-start-2 xl:col-start-2 2xl:col-start-3   rounded-3xl "></div>
				<div className="bg-white col-span-1 row-span-2 rounded-3xl "></div>
				<div className="bg-black col-span-1 2xl:col-span-2 rounded-3xl"></div>
			</div>
		</div>
	);
};

export default Contact;
