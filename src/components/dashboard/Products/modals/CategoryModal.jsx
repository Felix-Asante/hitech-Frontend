import React, { useRef, useEffect, useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Box,
	Button,
	Chip,
	Stack,
	CircularProgress,
} from "@mui/material";
import Snackbars from "../../../Snackbars";
import http from "../../../../services/app-service";
const Category = (props) => {
	const categoryRef = useRef();
	const [categoryData, setCategoryData] = useState([]);
	const [search, setSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [openSnackBar, setOpenSnackBar] = useState(false);
	const [response, setResponse] = useState({ message: "", status: "" });

	useEffect(() => {
		http.requestGET("/category").then((response) => {
			setCategoryData(response.data.data);
		});
	}, [search]);

	const createCategoryHandler = () => {
		setIsLoading(true);
		const categoryName = categoryRef.current.value.trim();

		if (categoryData === "") return;
		const data = { category: categoryName };
		http
			.requestPOST("/category", data)
			.then((res) =>
				setResponse({ message: res.data.response, status: res.status })
			)
			.catch((err) => console.log(err));

		setIsLoading(false);
		setOpenSnackBar(true);
		setSearch(!search);
	};
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackBar(false);
	};
	const handleCategoryDelete = (id) => {
		const path = `/category/${id}`;
		setIsLoading(true);
		http
			.requestDELETE(path)
			.then((res) => {
				setResponse({ message: res.data.message, status: res.status });
			})
			.catch((err) => {
				setResponse({ message: "An error occurred", status: 404 });

				setOpenSnackBar(true);
			});
		setIsLoading(false);
		setSearch(!search);
		setOpenSnackBar(true);
	};

	return (
		<Dialog open={props.open} onClose={props.modelCloseHandler}>
			<DialogTitle>Product Categories</DialogTitle>
			<DialogContent>
				<Stack direction="row" spacing={1}>
					<Box
						component="input"
						name="category"
						ref={categoryRef}
						placeholder="Enter category, eg:smartphones"
						sx={{
							padding: "12px 15px",
							border: "1px solid #555",
							borderRadius: "4px",
							marginRight: "10px",
							width: "442px",
						}}
					/>
					<Button
						color="error"
						variant="contained"
						onClick={createCategoryHandler}
					>
						Save
					</Button>
				</Stack>
				{!isLoading && (
					<Stack direction="row" spacing={1} sx={{ m: 2, flexWrap: "wrap" }}>
						{categoryData.map((item) => {
							return (
								<Chip
									label={item.name}
									onDelete={() => {
										handleCategoryDelete(item._id);
									}}
									sx={{ mb: 1 }}
									key={item._id}
								/>
							);
						})}
					</Stack>
				)}
				<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
					{isLoading && <CircularProgress color="error" />}
				</Box>
			</DialogContent>
			<Snackbars
				open={openSnackBar}
				message={response.message}
				handleClose={handleClose}
				status={response.status}
			/>
		</Dialog>
	);
};

export default Category;
