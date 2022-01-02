import React from "react";
import { Snackbar, Alert } from "@mui/material";

const Snackbars = (props) => {
	return (
		<Snackbar
			open={props.open}
			autoHideDuration={6000}
			message={props.message}
			onClose={props.handleClose}
		>
			<Alert
				severity={props.status === 200 ? "success" : "error"}
				onClose={props.handleClose}
			>
				{props.message}
			</Alert>
		</Snackbar>
	);
};

export default Snackbars;
