import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const CategoryItem = ({ category, icon, path }) => {
	const styles = {
		icon: {
			width: "15px",
			height: "15px",
			borderRadius: "100%",
			background: "#f4f4f4",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "12px",
		},
		flex: {
			display: "flex",
			alignItems: "center",
			gap: "16px",
			marginBottom: "12px",
		},
	};
	return (
		<Link to={path} style={styles.flex}>
			<Box style={styles.icon}>{icon}</Box>
			{category}
		</Link>
	);
};

export default CategoryItem;
