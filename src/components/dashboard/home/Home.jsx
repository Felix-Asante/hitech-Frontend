import { Box } from "@mui/system";
import React from "react";
import MiniCards from "./MiniCards";
import { MonetizationOn, Storefront, PeopleAlt } from "@mui/icons-material";
import IncomeChart from "./IncomeChart";
import TopSelling from "./TopSelling";
import LatestTransactions from "./LatestTransactions";
const summary = [
	{
		icon: <MonetizationOn color="success" sx={{ fontSize: "50px" }} />,
		title: "Total Sales",
		amt: 28978,
	},
	{
		icon: <Storefront color="error" sx={{ fontSize: "50px" }} />,
		title: "Total Products",
		amt: 120,
	},
	{
		icon: <PeopleAlt color="warning" sx={{ fontSize: "50px" }} />,
		title: "Total users",
		amt: 22,
	},
];
const Home = () => {
	return (
		<Box sx={{ flex: 4 }}>
			<Box sx={{ m: 3 }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "20px",
					}}
				>
					{summary.map((item) => {
						return <MiniCards {...item} key={item.amt} />;
					})}
				</Box>
				<IncomeChart />
				<Box
					sx={{
						display: "flex",
						// alignItems: "center",
						// justifyContent: "space-between",
						mt: 4,
						mb: 4,
						gap: "30px",
					}}
				>
					<TopSelling />
					<Box sx={{ flex: "2" }}>
						<LatestTransactions />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
