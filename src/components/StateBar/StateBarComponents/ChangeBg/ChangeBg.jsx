import React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./changeBg.css";
import CloseIcon from "@mui/icons-material/Close";

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
			height: 400,
		},
	};
	return (
		<div className="w-12 flex justify-center items-center bg-pblack  rounded-xl overflow-hidden || md:w-16 ">
			<Button className="h-full w-full rounded-xl " onClick={props.handleOpen}>
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Portfolio/StateBar/wfozoyqsn2pom4oyyjjo"
					alt="change background icon"
					loading="lazy"
					className="h-6 w-6"
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
						<button
							className="w-6 h-6 -mt-6 -ms-6 flex items-center justify-center || hover:text-red-500"
							onClick={props.handleClose}
						>
							<CloseIcon fontSize="large" />
						</button>
						{props.settings.map((setting) => (
							<button
								key={setting}
								onClick={() => {
									props.setBackground(setting);
								}}
								className={` ${setting} backgroundProps h-20 rounded-xl text-white font-semibold`}
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
