import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
const MiniCards = ({ icon, title, amt }) => {
	return (
		<Paper sx={{ p: 2, flex: 1 }}>
			<Typography variant="h5">{title}</Typography>
			<Divider />
			<Box sx={{ display: "flex", gap: "16px", mt: 2, alignItems: "center" }}>
				{icon}
				<Typography variant="h5">{amt}</Typography>
			</Box>
		</Paper>
	);
};

export default MiniCards;
