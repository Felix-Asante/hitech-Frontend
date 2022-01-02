import React, { useState, useContext } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import microwave from "../assets/micro.jpeg";
import cartContext from "../context/cart-context";
import { ADD_TO_CART } from "../context/actions";
const ProductCard = (props) => {
	const [favorite, setFavorite] = useState(false);
	const [cart, setCart] = useState(false);
	const [itemInCart, setItemInCart] = useState(1);
	const CartCtx = useContext(cartContext);
	return (
		<Paper
			sx={{
				background: "primary",
				p: 1,
				width: "200px",
				height: "295px",
				marginRight: "80px",
			}}
			elevation={0}
		>
			<Box
				src={microwave}
				alt="microwave"
				component="img"
				sx={{ mr: "auto", ml: "auto", width: "90%", height: "160px" }}
			/>
			<Typography component="h6" variant="h6">
				Modern Microwave
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography variant="h5" component="h5" color="error">
					$69.00
				</Typography>
				<Typography color="grey.500" sx={{ fontSize: "14px", ml: 1 }}>
					(1250 sold)
				</Typography>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 1 }}>
				{!cart && (
					<Button
						color="error"
						variant="contained"
						elevation={0}
						onClick={() => {
							setCart(true);
							CartCtx.addToCart({
								type: ADD_TO_CART,
								payload: { price: 69.0, name: "Microwave", id: "3", qty: 1 },
							});
						}}
					>
						ADD TO CART
					</Button>
				)}
				{cart && (
					<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<Button color="error" variant="contained">
							-
						</Button>
						<Box>{itemInCart}</Box>
						<Button color="error" variant="contained">
							+
						</Button>
					</Box>
				)}
				{!favorite && (
					<FavoriteBorder
						color="error"
						sx={{ fontSize: "30px" }}
						className="wish_button"
						onClick={() => {
							setFavorite(true);
						}}
					/>
				)}
				{favorite && (
					<Favorite
						color="error"
						sx={{ fontSize: "30px" }}
						className="wish_button"
						onClick={() => {
							setFavorite(false);
						}}
					/>
				)}
			</Box>
		</Paper>
	);
};

export default ProductCard;
