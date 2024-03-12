import React from "react";
import SectionDivider from "../../utils/SectionDivider";
import FormContainer from "./Form/FormContainer";

const Contact = () => {
	return (
		<div id="contact" className="flex flex-col">
			<SectionDivider section={"contact"} title={"Contact"} />
			<div className=" self-center w-full grid grid-cols-1 md:grid-cols-2 md:w-[672px] grid-rows-a2 md:grid-rows-a3 gap-8 pb-8">
				<div className="col-span-1 row-span-2 md:col-span-2 md:row-span-3 rounded-3xl ">
					<FormContainer/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
