import React from "react";
import {
	Select,
	MenuItem,
	Box,
	Divider,
	InputBase,
	Button,
	FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
	// categorySearch: {
	// 	[theme.breakpoints.down("md")]: {
	// 		display: "flex",
	// 		alignItems: "center",
	// 	},
	// },
	form: {
		[theme.breakpoints.down("md")]: {
			display: "flex",
			alignItems: "center",
		},
		display: "none",
		marginTop: "75px",
		gap: "16px",
	},
	flex: {
		display: "flex",
		alignItems: "center",
		gap: "14px",
	},
	searchbar: {
		width: "80%",
		boxShadow: "1px 1px 5px  #ccc",
	},
	select: {
		border: "none",
		outline: "none",
	},
}));
const CategorySearchBar = () => {
	const classes = useStyle();
	return (
		<form className={classes.form}>
			<Box
				sx={{
					padding: "10px 8px",
					border: 1,
					borderColor: "grey.500",
					borderRadius: 2,
				}}
				className={`${classes.flex} ${classes.searchbar}`}
			>
				<FormControl variant="standard">
					<Select sx={{ width: "120px" }} className={classes.select}>
						<MenuItem value="Select1">Select Category</MenuItem>
						<MenuItem value="Select2">Select 2</MenuItem>
						<MenuItem value="Select3">Select 3</MenuItem>
					</Select>
				</FormControl>
				<Divider orientation="vertical" />
				<InputBase placeholder="Search for product" sx={{ width: "80%" }} />
			</Box>
			<Button
				color="error"
				variant="contained"
				sx={{ padding: "11px 10px", width: "15%" }}
			>
				Search
			</Button>
		</form>
	);
};

export default CategorySearchBar;
