import React from "react";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import { Link } from "react-scroll";

const DownBarButtons = ({ to, className }) => {
	const style = {
		icons:
			" flex justify-center items-center rounded-xl h-full w-full bg-transparent ",
	};
	return (
		<Link
			className={"rounded-xl text-white " + className}
			to={`${to}`}
			spy={true}
			smooth={true}
			offset={-68}
			duration={500}
			activeClass="prueba"
		>
			<button className={style.icons}>
				{to == "profile" ? (
					<Person2RoundedIcon />
				) : to == "experience" ? (
					<ImportContactsRoundedIcon />
				) : to == "contact" ? (
					<SmsRoundedIcon />
				) : (
					to
				)}
			</button>
		</Link>
	);
};

export default DownBarButtons;
