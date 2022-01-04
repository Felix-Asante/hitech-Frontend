import React, { useState } from "react";
import {
	Box,
	Chip,
	Paper,
	Rating,
	Stack,
	Typography,
	Button,
} from "@mui/material";

import ImageGallery from "react-image-gallery";
import { Delete } from "@mui/icons-material/";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductDetails = () => {
	const photos = [
		{
			original: "https://picsum.photos/id/1018/1000/600/",
			thumbnail: "https://picsum.photos/id/1018/1000/600/",
		},
		{
			original: "https://picsum.photos/id/1015/1000/600/",
			thumbnail: "https://picsum.photos/id/1015/1000/600/",
		},
	];
	return (
		<Box sx={{ flex: 4, height: "calc(100vh - 80px)", p: 4 }}>
			<Paper sx={{ p: 2, mb: 2 }}>
				<Stack direction="row" spacing={4}>
					<Box sx={{ flex: 1 }}>
						<ImageGallery
							items={photos}
							infinite={false}
							showNav={false}
							showPlayButton={false}
							showFullscreenButton={false}
						/>
					</Box>
					<Box sx={{ flex: 1 }}>
						{/* IF QUANTITY > 0 IN STOCK */}
						<Typography variant="h4" component="h4" gutterBottom>
							Product detail page
						</Typography>
						<Chip label="In stock" color="success" />
						<Typography sx={{ mb: 1, mt: 1 }}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Quibusdam in consequatur amet eum porro quam!....
						</Typography>
						<Typography
							component="span"
							variant="span"
							sx={{ fontWeight: "bold" }}
						>
							Weight:
						</Typography>
						<Typography component="span" variant="span">
							1 kg
						</Typography>
						<Typography color="grey" sx={{ mt: 1, mb: 1, fontWeight: "bold" }}>
							Price
						</Typography>
						<Typography variant="h4" gutterBottom color="error">
							$ 350.00
						</Typography>
						<Rating value={3} readOnly />
						<br />
						<Button
							variant="contained"
							color="error"
							startIcon={<Delete />}
							sx={{ mt: 2 }}
						>
							Delete product
						</Button>
					</Box>
				</Stack>
			</Paper>

			<Paper sx={{ p: 3 }}>
				<Box>
					<Tabs>
						<TabList>
							<Tab>Description</Tab>
							<Tab>Review</Tab>
						</TabList>
						<TabPanel style={{ paddingTop: "1rem" }}>
							<h1>Description</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Incidunt illo odio ratione labore eos. Quas neque ea, incidunt,
								praesentium repellat quos vel laudantium quam error laborum
								quod, dolore explicabo earum!
							</p>
						</TabPanel>
						<TabPanel style={{ paddingTop: "1rem" }}>
							<h1>Reviews</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Incidunt illo odio ratione labore eos. Quas neque ea, incidunt,
								praesentium repellat quos vel laudantium quam error laborum
								quod, dolore explicabo earum!
							</p>
						</TabPanel>
					</Tabs>
				</Box>
			</Paper>
		</Box>
	);
};

export default ProductDetails;
