import React from "react";
import { Paper } from "@mui/material";
import {
	PhoneIphone,
	ConnectedTv,
	Headphones,
	Watch,
	Keyboard,
	LocalOffer,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import CategoryItem from "./CategoryItem";
const styles = makeStyles({
	icon: {
		fontSize: "12px",
		"&:hover": {
			color: "warning",
		},
	},
});
const LeftCategoryMenu = () => {
	const classes = styles();
	const categories = [
		{
			icon: <PhoneIphone className={classes.icon} />,
			category: "Smartphones",
			path: "/",
		},
		{
			icon: <ConnectedTv className={classes.icon} />,
			category: "Tv & Audio",
			path: "/",
		},
		{
			icon: <Headphones className={classes.icon} />,
			category: "Headphones",
			path: "/",
		},
		{
			icon: <Watch className={classes.icon} />,
			category: "Smart watches",
			path: "/",
		},
		{
			icon: <Keyboard className={classes.icon} />,
			category: "Accessories",
			path: "/",
		},
		{
			icon: <LocalOffer className={classes.icon} />,
			category: "Sales and offers",
			path: "/",
		},
		{
			icon: <LocalOffer className={classes.icon} />,
			category: "New arrivals",
			path: "/",
		},
		{
			icon: <LocalOffer className={classes.icon} />,
			category: "Special products",
			path: "/",
		},
	];
	return (
		<Paper sx={{ background: "primary", padding: "16px", height: "92%" }}>
			{categories.map((category, i) => {
				return <CategoryItem {...category} key={i} />;
			})}
		</Paper>
	);
};

export default LeftCategoryMenu;
