import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import Slider from "react-slick";
import SingleCategoryProductCard from "./SingleCategoryProductCard";

const SingleCategory = (props) => {
	const { slide, title, sub, div, bannerPosition, banner, h } = props;
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: slide,
		slidesToScroll: 1,
		autoplay: true,
		rows: 2,
	};
	return (
		<Box sx={{ position: "relative" }}>
			<Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
				<Typography
					variant="span"
					component="span"
					color="error"
					gutterBottom
					sx={{ fontSize: "1.4rem", marginRight: "5px" }}
				>
					{title}
				</Typography>

				<Typography
					variant="span"
					component="span"
					gutterBottom
					sx={{ fontSize: "1.4rem" }}
				>
					{sub}
				</Typography>
				<Divider flexItem sx={{ height: "5px", width: div, mt: 1.3, ml: 1 }} />
			</Box>
			<Grid container spacing={4}>
				{bannerPosition === "left" && (
					<Grid item md={3}>
						<Box
							src={banner}
							alt="banner"
							component="img"
							width="100%"
							height={h}
						/>
					</Grid>
				)}
				<Grid item md={9}>
					<Slider {...settings}>
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
						<SingleCategoryProductCard />
					</Slider>
				</Grid>
				{bannerPosition === "right" && (
					<Grid item md={3}>
						<Box
							src={banner}
							alt="banner"
							component="img"
							width="100%"
							height={h}
						/>
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default SingleCategory;
