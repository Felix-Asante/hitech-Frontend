import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
function App() {
	const theme = createTheme({
		palette: {
			primary: { main: "#fff" },
		},
		// breakpoints: {
		// 	values: {
		// 		med: 991,
		// 	},
		// },
	});
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="admin/*" element={<Dashboard />} />
					<Route path="/:productName/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
