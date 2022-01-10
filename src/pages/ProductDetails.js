import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";
import CartProvider from "../context/CartProvider";
const ProductInfos = () => {
	return (
		<CartProvider>
			<Navbar />
			<Container>
				<Box sx={{ mt: 8 }}>
					<ProductDetails />
				</Box>
			</Container>
		</CartProvider>
	);
};

export default ProductInfos;
