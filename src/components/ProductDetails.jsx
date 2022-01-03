import React, { useState } from "react";
import {
	Box,
	Chip,
	Paper,
	Rating,
	Stack,
	Typography,
	Button,
	Tabs,
	Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab/";

import ImageGallery from "react-image-gallery";
import { Delete } from "@mui/icons-material/";

const ProductDetails = () => {
	const [value, setValue] = useState();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
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

			<Paper>
				<Box>
					<TabContext value={{ value }}>
						<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
							<TabList onChange={handleChange}>
								<Tabs value={value} textColor="error" indicatorColor="error">
									<Tab label="Description" value="1" />
									<Tab label="Reviews" value="2" />
								</Tabs>
							</TabList>
						</Box>
						<TabPanel value="1">description</TabPanel>
						<TabPanel value="2">Reviews</TabPanel>
					</TabContext>
				</Box>
			</Paper>
		</Box>
	);
};

export default ProductDetails;
