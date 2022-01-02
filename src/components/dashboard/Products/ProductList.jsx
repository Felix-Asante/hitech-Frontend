import { Avatar, Box } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import comp from "../../../assets/comp.jpeg";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
						<Link to={`/product/update/${params.row.id}`}>
							<Edit color="success" sx={{ fontSize: "18px" }} />
						</Link>
						<Link to={`/product/delete/${params.row.id}`}>
							<Delete color="error" sx={{ fontSize: "18px" }} />
						</Link>
					</Box>
				);
			},
		},
	];
	const rows = [
		{
			id: 1,
			productName: "HeadPhone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 2,
			productName: "HeadPhone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 3,
			productName: "HeadPhone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 4,
			productName: "HeadPhone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 5,
			productName: "Phone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 6,
			productName: "Phone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 7,
			productName: "Phone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 8,
			productName: "Phone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 9,
			productName: "Phone",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 10,
			productName: "Bag",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 11,
			productName: "Bag",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 12,
			productName: "Bag",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 13,
			productName: "oven",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 14,
			productName: "oven",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 15,
			productName: "oven",
			stock: "122",
			price: "20",
			avatar: comp,
		},
		{
			id: 16,
			productName: "oven",
			stock: "122",
			price: "20",
			avatar: comp,
		},
	];
	return (
		<DataGrid
			rows={rows}
			columns={columns}
			pageSize={8}
			rowsPerPageOptions={[8]}
			checkboxSelection
			disableSelectionOnClick
		/>
	);
};

export default ProductList;
