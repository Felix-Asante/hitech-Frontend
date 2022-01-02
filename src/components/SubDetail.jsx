import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
	paper: {
		background: "primary",
		padding: "12px",
		display: "flex",
		gap: "20px",
		alignItems: "center",
	},
	icon: {
		width: "50px",
		height: "50px",
		borderRadius: "100%",
		background: "#f4f4f4",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));
const RightCategory = ({ icon, primaryText, secText }) => {
	const classes = useStyles();
	return (
		<Paper elevation={4} className={classes.paper}>
			<Box className={classes.icon}>{icon}</Box>
			<Box>
				<Typography>{primaryText}</Typography>
				<Typography variant="small" component="small">
					{secText}
				</Typography>
			</Box>
		</Paper>
	);
};

export default RightCategory;
