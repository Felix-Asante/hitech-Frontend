import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import http from "../../../services/app-service";
const ProductList = () => {
	const columns = [
		{ field: "id", headerName: "ID", width: 100 },
		{
			field: "img",
			headerName: "Image",
			width: 100,
			renderCell: (params) => {
				return <Avatar src={params.row.avatar} alt="photo" />;
			},
		},
		{ field: "productName", headerName: "Product Name", width: 400 },
		{ field: "stock", headerName: "Stock", width: 130 },
		{ field: "price", headerName: "Price", width: 100 },
		{
			field: "actions",
			headerName: "Actions",

			width: 130,
			renderCell: (params) => {
				return (
					<Box sx={{ display: "flex", gap: "10px" }}>
						<Link to={`/product/update/${params.row.key}`}>
							<Edit color="success" sx={{ fontSize: "18px" }} />
						</Link>
						<Link to={`/product/delete/${params.row.key}`}>
							<Delete color="error" sx={{ fontSize: "18px" }} />
						</Link>
					</Box>
				);
			},
		},
	];

	const [rows, setRows] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		http
			.requestGET("/product")
			.then((res) => {
				const products = [];
				res.data.data.forEach((item, index) => {
					const data = {
						id: index + 1,
						productName: item.productName,
						stock: item.quantity,
						price: item.price,
						avatar: item.productPhotos[0].image,
						key: item._id,
					};
					products.push(data);
				});

				setRows(products);
			})
			.catch((err) => console.log(err));

		const delay = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => {
			clearTimeout(delay);
		};
	}, []);
	return (
		<>
			{!isLoading && rows.length > 0 && (
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={8}
					rowsPerPageOptions={[8]}
					checkboxSelection
					disableSelectionOnClick
				/>
			)}

			{isLoading && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "80%",
					}}
				>
					<CircularProgress color="error" />
					{/* <h1>Loading</h1> */}
				</Box>
			)}
			{!isLoading && rows.length === 0 && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "80%",
					}}
				>
					<Typography color="error">No Product Found</Typography>
				</Box>
			)}
		</>
	);
};

export default ProductList;
