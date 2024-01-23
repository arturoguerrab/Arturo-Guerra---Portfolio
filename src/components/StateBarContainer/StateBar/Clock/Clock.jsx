import { useState } from "react";

const Clock = () => {
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

	return (
		<div className="col-start-12 flex justify-center items-center">
			<div className="bg-[#28333E] rounded-[1.25rem] w-16 h-10 flex items-center justify-center text-white">{time}</div>
		</div>
	);
};

export default Clock;
