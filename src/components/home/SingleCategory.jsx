import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Grid, Skeleton } from "@mui/material";
import Slider from "react-slick";
import SingleCategoryProductCard from "./SingleCategoryProductCard";
import http from "../../services/app-service";
import ban1 from "../../assets/ban1.jpeg";
import ban2 from "../../assets/ban2.jpeg";
const SingleCategory = (props) => {
	const { slide } = props;
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		rows: 1,
	};

	const { name, div, direction, data, isLoading } = props;

	return (
		<Box sx={{ position: "relative", mt: 8 }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: "20px",
				}}
			>
				{!isLoading && (
					<Typography
						variant="span"
						component="span"
						gutterBottom
						sx={{ fontSize: "1.4rem", marginRight: "5px" }}
					>
						{name}
					</Typography>
				)}
				{isLoading && <Skeleton variant="text" width={400} />}

				<Divider flexItem sx={{ height: "5px", width: div, mt: 1.3, ml: 1 }} />
			</Box>
			<Grid container spacing={4}>
				{direction === "left" && (
					<Grid item md={3}>
						{!isLoading && (
							<Box
								src={ban1}
								alt="banner"
								component="img"
								width="100%"
								height="95%"
							/>
						)}
						{isLoading && (
							<Skeleton variant="rectangle" width={300} height={300} />
						)}
					</Grid>
				)}
				<Grid item md={9}>
					<Slider {...settings}>
						{data.map((info, i) => {
							return (
								<SingleCategoryProductCard
									productName={info.productName}
									image={info.productPhotos[0].image}
									key={i}
									price={info.price}
									isLoading={isLoading}
									id={info._id}
								/>
							);
						})}
					</Slider>
				</Grid>
				{direction === "right" && (
					<Grid item md={3}>
						{!isLoading && (
							<Box
								src={ban2}
								alt="banner"
								component="img"
								width="100%"
								height="95%"
							/>
						)}
						{isLoading && (
							<Skeleton variant="rectangle" width={300} height={300} />
						)}
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default SingleCategory;
