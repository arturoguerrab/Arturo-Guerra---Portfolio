import React, { useContext, useState } from "react";
import BrushIcon from "@mui/icons-material/Brush";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DataContext } from "../../../../context/DataContextProvider";

const ChangeBgContainer = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const { setBackground } = useContext(DataContext);
	const settings = ["onePiece", "otro"];

	const littlePicSelector = (setting) => {
		let selection = "";

		switch (setting) {
			case "onePiece":
				selection =
					"https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/ea6lanvn9rnatva9ws4m";
				break;
			case "otro":
				selection =
					"https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/qgtzaznalvcvobbq5cbp";
				break;

			default:
				//Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
				break;
		}
		return selection;
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = (value) => {
		setAnchorElUser(null);
	};

	const style = {
		desing:
			"bg-gray-800 text-white rounded-xl flex justify-center items-center ",
		gridXL: "xl:col-span-2 ",
		gridLND: "",
	};
	return (
		<div className={style.desing + style.gridXL}>
			<Box sx={{ flexGrow: 0, width: 2 / 2, height:2/2, borderRadius:"0.75rem" } }>
				<IconButton
					onClick={handleOpenUserMenu}
					sx={{ p: 0, width: 2 / 2,height:2/2, color: "white" }}
				>
					<BrushIcon />
				</IconButton>
				<Menu
					sx={{ mt: "2.75rem", color:"green"}}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",						
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					{settings.map((setting) => (
						<MenuItem
							onClick={() => {
								handleCloseUserMenu();
								setBackground(setting);
							}}
							sx={{
								m: "5px",
								width: "320px",
								height: "80px",
								borderRadius: "0.75rem",
								backgroundImage: `url(${littlePicSelector(setting)})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition:"center",
							}}
							key={setting}
						>
							<Typography
								textAlign="center"
								sx={{ color: "white", fontWeight: 700, width: 2 / 2 }}
							>
								{setting}
							</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</div>
	);
};

export default ChangeBgContainer;
