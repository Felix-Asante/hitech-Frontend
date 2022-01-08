import React from "react";
import banner1 from "../assets/banner-1.jpeg";
import banner2 from "../assets/banner-2.jpeg";
import banner3 from "../assets/banner-3.jpeg";
import { Box } from "@mui/material";
import Slider from "react-slick";

const Slide = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		// slidesToShow: 1,
		// slidesToScroll: 1,
		arrows: false,
		useTransform: false,
		adaptiveHeight: true,
		vertical: false,
		autoplay: true,
	};
	const styles = {
		width: "100%",
		height: "80%",
	};
	return (
		<Box style={styles}>
			<Slider {...settings}>
				<Box>
					<img
						// component="img"
						src={banner1}
						// sx={{ width: "100%", height: "100%" }}
						alt="banner"
						width="100%"
						height="80%"
					/>
				</Box>
				<Box>
					<img
						// component="img"
						src={banner2}
						// sx={{ width: "100%", height: "100%" }}
						alt="banner"
						width="100%"
						height="80%"
					/>
				</Box>
				<Box>
					<img
						// component="img"
						src={banner3}
						// sx={{ width: "100%", height: "100%" }}
						alt="banner"
						width="100%"
						height="80%"
					/>
				</Box>
			</Slider>
		</Box>
	);
};

export default Slide;
