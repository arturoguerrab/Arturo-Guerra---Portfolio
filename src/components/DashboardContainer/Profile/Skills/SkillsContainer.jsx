import React from "react";
import Skills from "./Skills";

const SkillsContainer = () => {
	// const [stack, setStack] = useState([]);

	// const iconFetch = async () => {
	// 	try {
	// 		let response = await fetch("./dbStackIcons.json");
	// 		let result = await response.json();
	// 		setTimeout(() => {
	// 			setStack(result);
	// 		}, 2000);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const stack = [
		{
			name: "JavaScript",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/utm7ukexzfssbgjohchg",
		},
		{
			name: "Firebase",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/xsom8jg2v9dzpbwwjls0",
		},
		{
			name: "NodeJs",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/njgaop2nidyjenhdwhhy",
		},
		{
			name: "CSS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/j9jmek0d25izwhxgy58o",
		},
		{
			name: "ReactJS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/tfvxrtgdropsm1nyuptl",
		},
		{
			name: "GIT",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/bpoxzcyhlmwr0ikgrpoz",
		},
		{
			name: "MySQL",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/au5vkglwfe0e1l65dbwi",
		},
		{
			name: "SASS",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/awltdsz0wr5dts9l3llw",
		},
		{
			name: "Tailwind",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/lysxqdv6dugrouvueblr",
		},
		{
			name: "Bootstrap",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/sp9ycbb47zytgqmpukfs",
		},
		{
			name: "Express",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/vaeseryk52tkkwooo7zu",
		},
		{
			name: "HTML",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/fd2yg4oqdkwrmzkzyamb",
		},
		{
			name: "MongoDB",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/wru5cprubwizysjothm8",
		},
		{
			name: "NPM",
			img: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/Stack/qy00oxhjzvdwm5qn5cl0",
		},
	];

	// const skeleton = (qty) => {
	// 	const skeletonQty = [];

	// 	for (let index = 0; index < qty; index++) {
	// 		skeletonQty.push(
	// 			<Skeleton variant="rounded" width={52} height={52} key={index} />
	// 		);
	// 	}

	// 	return skeletonQty.map((e) => {
	// 		return e;
	// 	});
	// };

	// useEffect(() => {
	// 	iconFetch();
	// }, []);
	const props = { stack };
	return <Skills props={props} />;
};

export default SkillsContainer;
