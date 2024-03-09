import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./changeBg.css";
import Icon from "../../../utils/Icon";

const ChangeBg = ({ props }) => {
	const style = {
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
		<div className="bg-pblack overflow-hidden rounded-xl flex justify-center items-center w-12 md:w-16 ">
			<Button className="h-full w-full rounded-xl " onClick={props.handleOpen}>
				<Icon
					src={
						"https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/xh67cuikxp084wy0tony"
					}
					alt={"change background icon"}
				/>
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
