import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Skills from "./Skills";

const SkillsContainer = () => {

	const [stack, setStack] = useState([]);

	const iconFetch = async () => {
		try {
			let response = await fetch("./dbStackIcons.json");
			let result = await response.json();
			setTimeout(() => {
				setStack(result);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	const skeleton = (qty) => {
		const skeletonQty = [];

		for (let index = 0; index < qty; index++) {
			skeletonQty.push(
				<Skeleton variant="rounded" width={52} height={52} key={index} />
			);
		}

		return skeletonQty.map((e) => {
			return e;
		});
	};

	useEffect(() => {
		iconFetch();
	}, []);
    const props = {stack, skeleton}
  return (
    <Skills props={props} />
  )
}

export default SkillsContainer