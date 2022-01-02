import { Paper, Typography } from "@mui/material";
import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

const data = [
	{ month: "Jan", amount: 45000 },
	{ month: "Feb", amount: 1200 },
	{ month: "Mar", amount: 53000 },
	{ month: "Apr", amount: 2000 },
	{ month: "May", amount: 16000 },
	{ month: "Jun", amount: 1000 },
	{ month: "Jul", amount: 15000 },
	{ month: "Aug", amount: 50000 },
	{ month: "Sep", amount: 200 },
	{ month: "Oct", amount: 3000 },
	{ month: "Nov", amount: 5000 },
	{ month: "Dec", amount: 56000 },
];
const IncomeChart = () => {
	return (
		<Paper sx={{ p: 2, mt: 4 }}>
			<Typography variant="h6" color="error" gutterBottom>
				Monthly Income
			</Typography>
			<LineChart
				width={1100}
				height={300}
				data={data}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
			>
				<Line type="monotone" dataKey="amount" stroke="#d32f2f" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="month" />
				<Tooltip />
			</LineChart>
		</Paper>
	);
};

export default IncomeChart;
