import { Notifications, Settings } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import comp from "../../assets/comp.jpeg";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	toolbarIcons: {
		display: "flex",
		alignItems: "center",
		gap: "10px",
	},
}));
const Topbar = () => {
	const classes = useStyle();
	return (
		<AppBar elevation={0}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5" component="h5" color="error">
					Hitech Admin
				</Typography>
				<Box className={classes.toolbarIcons}>
					<Badge badgeContent={10} max={9} color="error">
						<Notifications />
					</Badge>
					<Settings />
					<Avatar src={comp} alt="admin" />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
