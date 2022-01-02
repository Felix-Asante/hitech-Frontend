import React from "react";
import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	Paper,
	Typography,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import comp from "../../../assets/comp.jpeg";
const TopSelling = () => {
	return (
		<Paper sx={{ flex: "1", height: "100%" }}>
			<Typography variant="h6" gutterBottom sx={{ pl: 2, pt: 2 }}>
				Top selling products
			</Typography>
			<List>
				<ListItem sx={{ justifyContent: "space-between" }}>
					<Avatar src={comp} alt="product" />
					<Typography>42' TCL TV</Typography>
					<Button color="error">View</Button>
				</ListItem>
				<Divider flexItem />
				<ListItem sx={{ justifyContent: "space-between" }}>
					<Avatar src={comp} alt="product" />
					<Typography>42' TCL TV</Typography>
					<Button color="error">View</Button>
				</ListItem>
				<Divider flexItem />
				<ListItem sx={{ justifyContent: "space-between" }}>
					<Avatar src={comp} alt="product" />
					<Typography>42' TCL TV</Typography>
					<Button color="error">View</Button>
				</ListItem>
				<Divider flexItem />
				<ListItem sx={{ justifyContent: "space-between" }}>
					<Avatar src={comp} alt="product" />
					<Typography>42' TCL TV</Typography>
					<Button color="error">View</Button>
				</ListItem>
				<Divider flexItem />
			</List>
		</Paper>
	);
};

export default TopSelling;
