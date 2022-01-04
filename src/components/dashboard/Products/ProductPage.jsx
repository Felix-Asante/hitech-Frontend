import React, { useState } from "react";
import ProductList from "./ProductList";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CategoryModal from "./modals/CategoryModal";
const ProductPage = () => {
	const [open, setOpen] = useState(false);
	const modelHandler = () => setOpen(true);
	const modelCloseHandler = () => setOpen(false);

	return (
		<Box sx={{ flex: "4", p: 4, height: "calc(100vh - 120px)" }}>
			<Link to="../new-product">
				<Button variant="contained" color="error" sx={{ marginBottom: "20px" }}>
					Add new Product
				</Button>
			</Link>
			{/* <Link to="../new-category"> */}
			<Button
				variant="contained"
				color="success"
				sx={{ marginBottom: "20px", marginLeft: "30px" }}
				onClick={modelHandler}
			>
				Create new Category
			</Button>
			{/* </Link> */}

			<ProductList />
			<CategoryModal open={open} modelCloseHandler={modelCloseHandler} />
		</Box>
	);
};

export default ProductPage;
