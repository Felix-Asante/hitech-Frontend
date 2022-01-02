import {
	Avatar,
	Button,
	Table,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	TableBody,
	Typography,
} from "@mui/material";
import React from "react";
import comp from "../../../assets/comp.jpeg";
const LatestTransactions = () => {
	return (
		<Paper sx={{ flex: "2", height: "100%" }}>
			<Typography variant="h6" gutterBottom sx={{ pl: 2, pt: 2 }}>
				Latest transactions
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Customer</TableCell>
						<TableCell>Date</TableCell>
						<TableCell>Amount</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>
							<Avatar src={comp} alt="use" />
							{/* OR USER NAME */}
						</TableCell>
						<TableCell>John Doe</TableCell>
						<TableCell>$450.89</TableCell>
						<TableCell>
							<Button color="error">Pending</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar src={comp} alt="use" />
							{/* OR USER NAME */}
						</TableCell>
						<TableCell>John Doe</TableCell>
						<TableCell>$450.89</TableCell>
						<TableCell>
							<Button color="error">Pending</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Paper>
	);
};

export default LatestTransactions;
