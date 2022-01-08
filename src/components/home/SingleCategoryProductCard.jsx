import React, { useState, useContext } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import cartContext from "../../context/cart-context";
import { ADD_TO_CART } from "../../context/actions";
const SingleCategoryProductCard = (props) => {
	const [favorite, setFavorite] = useState(false);
	const [cart, setCart] = useState(false);
	const [itemInCart, setItemInCart] = useState("1");
	const cartCtx = useContext(cartContext);
	return (
		<Paper
			sx={{
				background: "primary",
				p: 1,
				mr: 2,
				display: "flex",
				alignItems: "center",
				gap: "20px",
				mb: 2,
			}}
			elevation={0}
		>
			<Box
				src={props.image}
				alt={props.productName}
				component="img"
				sx={{ width: "30%", height: "80px", objectFit: "contain" }}
			/>
			<Box>
				<Typography component="strong" variant="strong" sx={{ mb: 1 }}>
					{props.productName}
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
					<Typography variant="h5" component="h5" color="error">
						${props.price}
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
								cartCtx.addToCart({
									type: ADD_TO_CART,
									payload: {
										price: props.price,
										name: props.productName,
										id: props.id,
										qty: 1,
									},
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
							sx={{ fontSize: "30px", mr: 1 }}
							className="wish_button"
							onClick={() => {
								setFavorite(true);
							}}
						/>
					)}
					{favorite && (
						<Favorite
							color="error"
							sx={{ fontSize: "30px", mr: 1 }}
							className="wish_button"
							onClick={() => {
								setFavorite(false);
							}}
						/>
					)}
				</Box>
			</Box>
		</Paper>
	);
};

export default SingleCategoryProductCard;
