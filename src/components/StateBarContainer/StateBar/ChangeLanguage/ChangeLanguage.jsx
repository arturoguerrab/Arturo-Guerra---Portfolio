import { useContext } from "react";
import { DataContext } from "../../../../context/DataContextProvider";

import { styled } from "@mui/material/styles";

import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
	const { language, setLanguage } = useContext(DataContext);
	const [t, i18n] = useTranslation("global");

	const IOSSwitch = styled((props) => (
		<Switch
			focusVisibleClassName=".Mui-focusVisible"
			disableRipple
			{...props}
		/>
	))(({ theme }) => ({
		width: 45,
		height: 30,
		padding: 0,
		"& .MuiSwitch-switchBase": {
			padding: 0,
			margin: 2,
			transitionDuration: "300ms",
			"&.Mui-checked": {
				transform: "translateX(16px)",
				color: "#fff",
				"& + .MuiSwitch-track": {
					backgroundColor: "#28333E",
					opacity: 1,
					border: 0,
				},
				"&.Mui-disabled + .MuiSwitch-track": {
					opacity: 0.5,
				},
			},
			"&.Mui-focusVisible .MuiSwitch-thumb": {
				color: "#000",
				border: "6px solid #fff",
			},
			"&.Mui-disabled .MuiSwitch-thumb": {
				color:
					theme.palette.mode === "light"
						? theme.palette.grey[100]
						: theme.palette.grey[600],
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
			},
		},
		"& .MuiSwitch-thumb": {
			boxSizing: "border-box",
			width: 25,
			height: 25,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "contain",
			backgroundImage: `url(${
				!language
					? "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/brm5p58xchriuowxcmrx"
					: "https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/yj7sn6p7qju6vewqluns"
			})`,
		},
		"& .MuiSwitch-track": {
			borderRadius: 26 / 1,
			backgroundColor: "#28333E",
			opacity: 1,
			transition: theme.transitions.create(["background-color"], {
				duration: 500,
			}),
		},
	}));

	const handleChange = (event) => {
		setLanguage(event.target.checked);
		!language ? i18n.changeLanguage("es") : i18n.changeLanguage("en");
	};

	return (
		<div className="col-span-2 md:col-span-1 // flex justify-center items-center // ">
			<IOSSwitch sx={{ m: 1 }} checked={language} onChange={handleChange} />
		</div>
	);
};

export default ChangeLanguage;
