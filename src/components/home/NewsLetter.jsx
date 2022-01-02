import { Telegram } from "@mui/icons-material";
import { Box, InputBase, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
	newsletter: {
		background: "#d32f2f",
	},
	form: {
		background: "#fff",
		width: "350px",
	},
	btn: {
		borderRadius: "0 4px 4px 0",
	},
	icon: {
		color: "#ddd",
	},
}));
const NewsLetter = () => {
	const classes = useStyle();
	return (
		<Box
			sx={{
				pt: 2,
				pr: 8,
				pl: 8,
				pb: 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",

				mt: 8,
			}}
			className={classes.newsletter}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
				<Telegram
					color="grey.500"
					sx={{ fontSize: "6rem" }}
					className={classes.icon}
				/>
				<Box>
					<Typography color="primary">Join Our Newsletter Now</Typography>
					<Typography color="grey.500" sx={{ fontSize: "14px" }}>
						Register To Get Updates On Promotions.
					</Typography>
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{ p: 1, borderRadius: "4px 0 0 4px" }}
					className={classes.form}
				>
					<InputBase
						placeholder="Subscribe Newsletter.."
						sx={{ width: "100%" }}
					/>
				</Box>
				<Button
					elevation={0}
					variant="contained"
					color="warning"
					sx={{ padding: 1.5 }}
					className={classes.btn}
				>
					Subscribe
				</Button>
			</Box>
		</Box>
	);
};

export default NewsLetter;
