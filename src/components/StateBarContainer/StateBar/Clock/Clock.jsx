import { useState } from "react";

const Clock = () => {
	const currentTime = () => {
		let time = new Date().toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
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
		<div className="col-span-1 col-start-11 md:col-start-12 flex justify-center items-center ">
			<div className="bg-[#28333E] rounded-xl px-2 -me-5 sm:-me-12  md:me-3  h-8 flex items-center justify-center text-white">
				{time}
			</div>
		</div>
	);
};

export default Clock;
