import {
	Box,
	Button,
	Divider,
	Stack,
	Typography,
	Paper,
	Container,
} from "@mui/material";
import CartProvider from "../context/CartProvider";
import Navbar from "../components/Navbar";
import React, { useState, useContext, useEffect } from "react";
import cartContext from "../context/cart-context";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
	const cartCtx = useContext(cartContext);
	const [elements, setElements] = useState([]);
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("cartItems"));
		setElements(items);
	}, [cartCtx.items]);
	const modifyQuantity = (id, action) => {
		cartCtx.modifyQuantity(id, action);
	};
	const CartElement = ({ item }) => {
		const total = item.qty * Number(item.price);
		return (
			<>
				<Stack
					direction="row"
					spacing={2}
					sx={{ mt: 2, mb: 1, alignItems: "center" }}
				>
					<Stack sx={{ flex: 2, alignItems: "center" }} direction="row">
						<img src={item.photo} alt={item.name} width="50px" height="50px" />
						<Typography noWrap sx={{ width: "200px" }}>
							{item.name}
						</Typography>
					</Stack>
					<Stack
						direction="row"
						spacing={2}
						sx={{ alignItems: "center", flex: 1 }}
					>
						<Button
							color="error"
							variant="contained"
							sx={{ padding: "2px !important" }}
							onClick={() => {
								modifyQuantity(item.id, "DECREASE");
							}}
						>
							-
						</Button>
						<Box>{item.qty}</Box>
						<Button
							color="error"
							variant="contained"
							sx={{ padding: "2px !important" }}
							onClick={() => {
								modifyQuantity(item.id, "INCREASE");
							}}
						>
							+
						</Button>
					</Stack>
					<Typography sx={{ flex: 1 }} align="center">
						${item.price}
					</Typography>
					<Typography sx={{ flex: 1 }} align="center">
						${total}
					</Typography>
					<DeleteOutlineIcon color="error" />
				</Stack>
				<Divider />
			</>
		);
	};
	return (
		<CartProvider>
			<Navbar />
			<Container>
				<Stack direction="row" sx={{ mt: 16, width: "100%" }}>
					<Paper elevation={0} sx={{ flex: 3, p: 2 }}>
						<Typography variant="h6">Shopping cart</Typography>
						<Divider />
						<Stack direction="row" spacing={2} sx={{ mt: 2, pt: 1 }}>
							<Typography sx={{ flex: 2 }}>PRODUCT DETAILS</Typography>
							<Typography sx={{ flex: 1 }}>QUANTITY</Typography>
							<Typography sx={{ flex: 1 }}>PRICE</Typography>
							<Typography sx={{ flex: 1 }}>TOTAL PRICE</Typography>
						</Stack>
						{elements.map((item) => {
							return <CartElement item={item} key={item.id} />;
						})}
					</Paper>
					<Box sx={{ p: 2, background: "#ababc1", flex: 1 }}>
						<Typography variant="h6">Shipping Address</Typography>
						<Divider />
						<form>
							<Box>
								<Box variant="label" component="label">
									E-mail
								</Box>
								<Box
									name="email"
									type="email"
									placeholder="E-mail"
									component="input"
								/>
							</Box>
							<Box>
								<Box variant="label" component="label">
									Address
								</Box>
								<Box
									name="address"
									type="text"
									placeholder="Address"
									component="input"
								/>
							</Box>
							<Box sx={{ mb: 2 }}>
								<Box variant="label" component="label">
									City
								</Box>
								<Box
									name="city"
									type="text"
									placeholder="City"
									component="input"
								/>
							</Box>

							<Divider />
							<Stack
								direction="row"
								sx={{ justifyContent: "space-between", mt: 2 }}
							>
								<Typography variant="strong">TOTAL COST</Typography>
								<Typography variant="strong">$0.00</Typography>
							</Stack>

							<Button
								variant="contained"
								color="error"
								sx={{ width: "100%", mt: 2 }}
							>
								CheckOut
							</Button>
						</form>
					</Box>
				</Stack>
			</Container>
		</CartProvider>
	);
};

export default Cart;
