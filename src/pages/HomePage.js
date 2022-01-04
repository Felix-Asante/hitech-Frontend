import React from "react";
import Navbar from "../components/Navbar";
import { Container, Box, Grid } from "@mui/material";
import CategorySearchBar from "../components/CategorySearchBar";
import LeftCategoryMenu from "../components/LeftCategoryMenu";
import Slide from "../components/Slide";
import SubDetail from "../components/SubDetail";
import {
	SupportAgent,
	CreditScore,
	LocalShipping,
	CardGiftcard,
} from "@mui/icons-material";
import Deals from "../components/home/Deals";
import SpecialProducts from "../components/home/SpecialProducts";
import ban1 from "../assets/ban1.jpeg";
import ban2 from "../assets/ban2.jpeg";
import { Link } from "react-router-dom";
import SingleCategory from "../components/home/SingleCategory";
import computers from "../assets/comp.jpeg";
import watch from "../assets/watch.jpeg";
import fullBanner from "../assets/full_banner.jpeg";
import NewsLetter from "../components/home/NewsLetter";
import CartProvider from "../context/CartProvider";
import useFetch from "../hooks/useFetch";
const HomePage = () => {
	const subDetailData = [
		{
			icon: <SupportAgent color="error" sx={{ fontSize: "35px" }} />,
			primaryText: "24/7 Free Support",
			secText: "Online Support 24/7",
		},
		{
			icon: <CreditScore color="error" sx={{ fontSize: "35px" }} />,
			primaryText: "Secure Payment",
			secText: "100% Secure Payment",
		},
		{
			icon: <CardGiftcard color="error" sx={{ fontSize: "35px" }} />,
			primaryText: "Special Gift Cards",
			secText: "Give The Perfect Gift",
		},
		{
			icon: <LocalShipping color="error" sx={{ fontSize: "35px" }} />,
			primaryText: "World Wide Shipping",
			secText: "On Order Over $99",
		},
	];
	const directions = ["left", "right"];
	const { error, data, isLoading } = useFetch("/");
	console.log("data", data);
	return (
		<CartProvider>
			<Navbar />

			<CategorySearchBar />
			<Container>
				<Box sx={{ marginTop: "100px" }}>
					<Grid container spacing={5}>
						<Grid item md={3}>
							<LeftCategoryMenu />
						</Grid>
						<Grid item md={9}>
							<Slide />
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						marginTop: "40px",
					}}
				>
					{subDetailData.map((detail, index) => {
						return <SubDetail {...detail} key={index} />;
					})}
				</Box>
				{/* DEAL AND SPECIAL PRODUCTS */}
				<Box sx={{ marginTop: "50px" }}>
					<Grid container spacing={8}>
						<Grid item md={6} sx={{ height: "100%" }}>
							<Deals />
						</Grid>
						<Grid item md={6}>
							<SpecialProducts
								slide={2}
								title="Special"
								sub="product"
								div="60%"
							/>
						</Grid>
					</Grid>
				</Box>
				{/* <ProductCard /> */}

				{/* POPULAR PRODUCTS */}
				<Box sx={{ mt: 4 }}>
					<SpecialProducts slide={4} title="Popular" sub="product" div="75%" />
				</Box>
				{/* !ADS BANNERS */}
				<Grid container sx={{ mt: 4 }} spacing={3}>
					<Grid item md={6}>
						<Link to="/">
							<Box component="img" src={ban1} alt="ad banner" width="100%" />
						</Link>
					</Grid>
					<Grid item md={6}>
						<Link to="/">
							<Box component="img" src={ban2} alt="ad banner" width="100%" />
						</Link>
					</Grid>
				</Grid>
				{/* SINGLE PRODUCT : COMPUTER & LAPTOP */}
				<Box sx={{ mt: 8 }}>
					<SingleCategory
						slide={2}
						div="75%"
						title="Computers"
						sub="& Laptop"
						bannerPosition="left"
						banner={computers}
						h="95%"
					/>
				</Box>
				{/* SINGLE PRODUCT : SMARTWATCH & MOBILE */}
				<Box sx={{ mt: 8 }}>
					<SingleCategory
						slide={2}
						div="47%"
						title="Smartwatch"
						sub="& Mobiles"
						bannerPosition="right"
						banner={watch}
						h="95%"
					/>
				</Box>
				{/* FULL BANNER */}
				<Box src={fullBanner} component="img" width="100%" sx={{ mt: 8 }} />
			</Container>
			{/* NEWSLETTER */}
			<NewsLetter />
		</CartProvider>
	);
};

export default HomePage;
