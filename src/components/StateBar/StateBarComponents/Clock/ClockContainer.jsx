import React from "react";
import { useState } from "react";
import Clock from "./Clock";

const ClockContainer = () => {
	const currentTime = () => {
		let time = new Date().toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
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

	const props = { time };

	return <Clock props={props} />;
};

export default ClockContainer;
