import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactWidget from "./FormElements/ContactWidget";
import Form from "./FormElements/Form";
import ResetForm from "./FormElements/ResetForm";
import { CircularProgress } from "@mui/material";

const FormContainer = () => {
	const [EmailInfo, setEmailInfo] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [SendOK, setSendOk] = useState(false);
	const refForm = useRef();

	const [Loading, setLoading] = useState(false);

	const handleState = () => {
		setSendOk(false);
		setLoading(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const serviceId = "service_qybhjaj";
		const templateId = "template_w2m5dmf";
		const apikey = "mcwEF4gYPlwG9MIst";

		console.log(SendOK);
		setLoading(true);
		setTimeout(() => {
			setSendOk(true);
		}, 5000);
		// emailjs
		// 	.sendForm(serviceId, templateId, refForm.current, apikey)
		// 	.then((res) => setSendOk(true))
		// 	.catch((err) => console.log(err));
	};

	const props = {
		refForm,
		handleSubmit,
		setEmailInfo,
		EmailInfo,
		SendOK,
		setSendOk,
	};
	return (
		<ContactWidget>
			{!SendOK && !Loading ? (
				<Form props={props} />
			) : !SendOK && Loading ? (
				<div className="w-full flex justify-center">
					<CircularProgress sx={{ color: '#00cc66' }} size={'3rem'}/>
				</div>
			) : (
				<ResetForm handleState={handleState} />
			)}
		</ContactWidget>
	);
};

export default FormContainer;
