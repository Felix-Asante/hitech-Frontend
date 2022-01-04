import {
	Chat,
	Email,
	Home,
	PeopleAlt,
	ReceiptLong,
	Storefront,
	Work,
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const menus = [
	{
		title: "Dashboard",
		items: [
			{
				icon: <Home />,
				name: "Home",
				path: "./dashboard",
			},
		],
	},
	{
		title: "Quick menus",
		items: [
			{
				icon: <Storefront />,
				name: "Products",
				path: "./products",
			},
			{
				icon: <ReceiptLong />,
				name: "Transactions",
				path: "./transaction",
			},
			{
				icon: <PeopleAlt />,
				name: "Users",
				path: "./users",
			},
		],
	},
	{
		title: "Notifications",
		items: [
			{
				icon: <Email />,
				name: "mail",
				path: "./mails",
			},
			{
				icon: <Chat />,
				name: "Feedbacks",
				path: "./feedbacks",
			},
		],
	},
	{
		title: "Staffs",
		items: [
			{
				icon: <Work />,
				name: "manage",
				path: "./manage-staffs",
			},
		],
	},
];

const useStyles = makeStyles((theme) => ({
	list: {
		"&:hover": {
			background: red[50],
		},
	},
	sideMenu: {
		position: "sticky",
		top: "50px",
		// left: 0
	},
}));
const Side = () => {
	const classes = useStyles();
	const Menus = menus.map((menu, index) => {
		return (
			<Box sx={{ mb: 2 }} key={index}>
				<Typography sx={{ color: "rgb(187,186,186)", pl: 4 }}>
					{menu.title}
				</Typography>
				<List sx={{ p: 0 }}>
					{menu.items.map((item, index) => {
						return (
							<Link to={item.path} key={index}>
								<ListItem
									sx={{
										color: "#555",
										gap: "10px",
										pl: 4,
										pb: 0.5,
									}}
									className={classes.list}
								>
									<ListItemIcon sx={{ minWidth: "20px" }}>
										{item.icon}
									</ListItemIcon>
									<ListItemText>{item.name}</ListItemText>
								</ListItem>
							</Link>
						);
					})}
				</List>
			</Box>
		);
	});
	return (
		<Paper
			elevation={0}
			sx={{
				flex: "0.8",
				background: "rgb(251,251,255)",
				height: "calc(100vh - 50px) !important",
				pt: 4,
				pb: 4,
			}}
			className={classes.sideMenu}
		>
			{Menus}
		</Paper>
	);
};

export default Side;
