import React, { useState } from "react";
import {
	Box,
	Chip,
	Paper,
	Rating,
	Stack,
	Typography,
	Button,
	Skeleton,
	Backdrop,
	CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { Delete, Http } from "@mui/icons-material/";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFetch from "../hooks/useFetch";
import ReactHtmlParser from "react-html-parser";
import deleteById from "../services/deleteById";
import http from "../services/app-service";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
	const Navigate = useNavigate();
	const [isDeleting, setIsDeleting] = useState(false);
	const handleProductDelete = (id) => {
		setIsDeleting(true);
		const endPoint = "/product/" + id;
		http
			.requestDELETE(endPoint)
			.then((res) => {
				setIsDeleting(false);
				Navigate(-1);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const { id } = useParams();
	const { isLoading, error, data } = useFetch(`/product/${id}`);
	const photos =
		data.productPhotos &&
		data.productPhotos.reduce((prevImage, currentImage) => {
			return prevImage.concat({
				original: currentImage.image,
				thumbnail: currentImage.image,
			});
		}, []);
	return (
		<Box sx={{ flex: 4, height: "calc(100vh - 80px)", p: 4 }}>
			{!error && (
				<Paper sx={{ p: 2, mb: 2 }}>
					<Stack direction="row" spacing={4}>
						<Box sx={{ flex: 1 }}>
							{!isLoading && (
								<ImageGallery
									items={photos}
									infinite={false}
									showNav={false}
									showPlayButton={false}
									showFullscreenButton={false}
								/>
							)}
							{isLoading && (
								<Stack>
									<Skeleton variant="rectangular" width={410} height={250} />
									<Stack direction="row" spacing={1} sx={{ mt: 1 }}>
										<Skeleton variant="rectangular" width={90} height={50} />
										<Skeleton variant="rectangular" width={90} height={50} />
									</Stack>
								</Stack>
							)}
						</Box>
						<Box sx={{ flex: 1 }}>
							{!isLoading && (
								<Typography variant="h4" component="h4" gutterBottom>
									{data.productName}
								</Typography>
							)}
							{isLoading && <Skeleton variant="text" />}
							{!isLoading && data.quantity > 0 && (
								<Chip label="In stock" color="success" />
							)}
							{!isLoading && data.quantity === 0 && (
								<Chip label="Sold Out" color="error" />
							)}
							{isLoading && <Skeleton variant="text" />}

							{/* {!isLoading && (
								<Box sx={{ mb: 1, mt: 1 }}>
									{ReactHtmlParser(data.description)}
								</Box>
							)} */}
							{isLoading && <Skeleton variant="text" />}
							<br />
							<br />
							{!isLoading && (
								<Typography
									component="span"
									variant="span"
									sx={{ fontWeight: "bold" }}
								>
									Weight:
								</Typography>
							)}
							{isLoading && <Skeleton variant="text" />}

							{!isLoading && (
								<Typography component="span" variant="span">
									{data.weight} kg
								</Typography>
							)}
							{isLoading && <Skeleton variant="text" />}
							{!isLoading && (
								<Typography
									color="grey"
									sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
								>
									Price
								</Typography>
							)}

							{!isLoading && (
								<Typography variant="h4" gutterBottom color="error">
									$ {data.price}
								</Typography>
							)}
							{isLoading && <Skeleton variant="text" />}
							{!isLoading && <Rating value={3} readOnly />}
							<br />
							{!isLoading && (
								<Button
									variant="contained"
									color="error"
									startIcon={<Delete />}
									sx={{ mt: 2 }}
									onClick={() => {
										handleProductDelete(data._id);
									}}
								>
									Delete product
								</Button>
							)}
							{isLoading && (
								<Skeleton variant="rectangle" width={150} height={50} />
							)}
						</Box>
					</Stack>
				</Paper>
			)}

			{!error && (
				<Paper sx={{ p: 3 }}>
					<Box>
						<Tabs>
							<TabList>
								<Tab>Description</Tab>
								<Tab>Review</Tab>
							</TabList>
							<TabPanel
								style={{ paddingTop: "1rem" }}
								className="product-description"
							>
								{!isLoading && ReactHtmlParser(data.description)}
								{isLoading && <Skeleton variant="text" />}
								{isLoading && <Skeleton variant="text" />}
								{isLoading && <Skeleton variant="text" />}
								{isLoading && <Skeleton variant="text" />}
							</TabPanel>
							<TabPanel style={{ paddingTop: "1rem" }}>
								<h1>Reviews</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Incidunt illo odio ratione labore eos. Quas neque ea,
									incidunt, praesentium repellat quos vel laudantium quam error
									laborum quod, dolore explicabo earum!
								</p>
							</TabPanel>
						</Tabs>
					</Box>
				</Paper>
			)}
			{error && (
				<Typography textAlign="center" color="error">
					Error
				</Typography>
			)}
			{isDeleting && (
				<Backdrop sx={{ color: "#fff", zIndex: 4000 }} open={isDeleting}>
					<CircularProgress color="error" />
				</Backdrop>
			)}
		</Box>
	);
};

export default ProductDetails;
