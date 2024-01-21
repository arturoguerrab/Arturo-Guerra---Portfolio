import { useState } from "react";

const Reloj = () => {
	console.log("run reloj");
	const currentTime = () => {
		let time = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
		return time;
	};
	const currentSeconds = () => {
		let seconds = new Date().toLocaleTimeString([], { second: "2-digit" });
		return 60000 - Number(seconds) * 1000;
	};

	const [time, SetTime] = useState(currentTime());

	setTimeout(() => {
		SetTime(currentTime());
	}, currentSeconds());

	return <div>{time}</div>;
};

export default Reloj;
