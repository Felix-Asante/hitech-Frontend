import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Container,
	Box,
	InputBase,
	Button,
	Typography,
	Badge,
	Paper,
	Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
	PersonOutline,
	KeyboardArrowDown,
	ShoppingCart,
	FavoriteBorder,
} from "@mui/icons-material";
import logo from "../assets/Hitech.png";
import cartContext from "../context/cart-context";
const Navbar = (props) => {
	const [paperState, setPaperState] = useState(false);
	const useStyle = makeStyles((theme) => ({
		toolbar: {
			display: "flex",
			justifyContent: "space-between",
			position: "relative",
		},
		flex: {
			display: "flex",
			alignItems: "center",
		},
		gap: {
			gap: "16px",
		},
		account: {
			position: "relative",
			cursor: "pointer",
		},
		searchForm: {
			[theme.breakpoints.down("md")]: {
				display: "none",
			},
		},
		paper: {
			display: "flex",
			flexDirection: "column",
			padding: "16px",
			position: "absolute",
			top: "120%",
			left: "0",
		},
	}));
	const accountHandler = () => {
		setPaperState(!paperState);
	};
	const classes = useStyle();
	// ! CART CONTEXT
	const Ctx = useContext(cartContext);
	const cartCount = Ctx.items ? Ctx.items.length : "0";

	return (
		<Box>
			{/* The appbar can be styled with either the color prop or style property and specifying the styles */}
			<AppBar color="primary">
				<Container>
					<Toolbar className={classes.toolbar}>
						<a href="/">
							<Box
								component="img"
								sx={{ width: 80, height: 30 }}
								src={logo}
								alt="Hitech"
							/>
						</a>
						<Box className={classes.searchForm}>
							<form
								action=""
								autoComplete="off"
								noValidate
								className={`${classes.flex} ${classes.gap}`}
							>
								<Box
									sx={{
										border: 1,
										borderColor: "grey.500",
										width: "340px",
										borderRadius: 1,
										padding: 0.7,
									}}
								>
									<InputBase
										placeholder="Search for product or category"
										sx={{ width: "100%" }}
									/>
								</Box>
								<Button
									variant="contained"
									color="error"
									sx={{ padding: 1.2, width: "100px" }}
								>
									SEARCH
								</Button>
							</form>
						</Box>
						<Box
							className={`${classes.flex} ${classes.gap} ${classes.account}`}
						>
							<Box className={classes.flex} onClick={accountHandler}>
								<PersonOutline sx={{ fontSize: "30px" }} />
								<Typography color="error">My account</Typography>
								<KeyboardArrowDown color="grey" sx={{ fontSize: "20px" }} />
								{paperState && (
									<Paper
										sx={{ backgroundColor: "primary" }}
										className={classes.paper}
									>
										<Button
											color="error"
											variant="contained"
											elevation={24}
											sx={{ m: 1 }}
										>
											LOGIN
										</Button>
										<Divider />
										<Link to="/" className={classes.flex}>
											<PersonOutline sx={{ fontSize: "30px" }} />
											Your account
										</Link>
										<Link to="/" className={classes.flex}>
											<ShoppingCart sx={{ fontSize: "30px" }} />
											Your Orders
										</Link>
										<Link to="/" className={classes.flex}>
											<FavoriteBorder sx={{ fontSize: "30px" }} />
											Whish List
										</Link>
									</Paper>
								)}
							</Box>
							<a href="/cart" className="cart-logo">
								<Badge badgeContent={cartCount} color="error" max={9}>
									<ShoppingCart />
								</Badge>
							</a>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Navbar;
