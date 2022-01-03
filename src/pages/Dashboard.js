import { Box, Typography } from "@mui/material";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../components/dashboard/home/Home";
import NewProduct from "../components/dashboard/Products/NewProduct";
import ProductPage from "../components/dashboard/Products/ProductPage";
import Side from "../components/dashboard/Side";
import Topbar from "../components/dashboard/Topbar";
import ProductDetails from "../components/ProductDetails";
const Dashboard = () => {
	return (
		<Box>
			<Topbar />
			<Box sx={{ display: "flex", marginTop: "63px" }}>
				<Side />
				{/* <Box sx={{ flex: "4", p: 4 }}> */}
				<Routes>
					<Route path="dashboard" element={<Home />} />
					<Route path="products" element={<ProductPage />} />
					<Route path="new-product" element={<NewProduct />} />
					<Route path="/products/u/:id" element={<ProductDetails />} />
				</Routes>
				{/* </Box> */}
			</Box>
		</Box>
	);
};

export default Dashboard;
