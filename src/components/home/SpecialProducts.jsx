import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

const SpecialProducts = (props) => {
	const { slide, title, sub, div } = props;
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: slide,
		slidesToScroll: 1,
		autoplay: true,
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
			<Slider {...settings}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</Slider>
		</Box>
	);
};

export default SpecialProducts;
