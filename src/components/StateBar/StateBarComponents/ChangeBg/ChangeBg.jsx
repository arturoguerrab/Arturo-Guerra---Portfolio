import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import './changeBg.css'

const ChangeBg = ({ props }) => {
	const style = {
		desing:
			"bg-gray-800 text-white rounded-xl flex justify-center items-center ",
		gridXL: "xl:col-span-2 ",
		modal: {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			width: 400,
			bgcolor: "background.paper",
			border: "1px solid rgba(255, 255, 255, 0.18)",
			boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
			p: 4,
			borderRadius: "0.75rem",
			display: "flex",
			flexDirection: "column",
			gap: "0.5rem",
		},
	};
	return (
		<div className={style.desing + style.gridXL}>
			<Button className="w-full h-full rounded-xl " onClick={props.handleOpen}>
				<BrushIcon className="text-white " />
			</Button>
			<Modal
				keepMounted
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={props.open}
				onClose={props.handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={props.open}>
					<Box sx={style.modal}>
						{props.settings.map((setting) => (
							<button
								key={setting}
								onClick={() => {
									props.setBackground(setting);
								}}
								className={` ${setting} backgroundLil h-20 rounded-xl text-white font-semibold`}
							>
								{setting}
							</button>
						))}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default ChangeBg;
