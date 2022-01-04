import React from "react";
import { Paper, Box, Typography, Divider, Button } from "@mui/material";
import microwave from "../../assets/micro.jpeg";
const Deals = (props) => {
	const dealStyles = {
		display: "flex",
		alignItems: "center",
		gap: "40px",
	};
	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
				<Typography
					variant="span"
					component="span"
					color="error"
					gutterBottom
					sx={{ fontSize: "1.4rem", marginRight: "5px" }}
				>
					Deal
				</Typography>

				<Typography
					variant="span"
					component="span"
					gutterBottom
					sx={{ fontSize: "1.4rem" }}
				>
					of the day
				</Typography>
				<Divider
					flexItem
					sx={{ height: "5px", width: "370px", mt: 1.3, ml: 1 }}
				/>
			</Box>
			<Paper elevation={0} sx={{ padding: 2 }}>
				<Box style={dealStyles}>
					<Box>
						<Box component="img" src={microwave} alt="" width="100%" />
					</Box>
					<Divider orientation="vertical" flexItem />
					<Box>
						<Typography variant="h5" component="h5" gutterBottom>
							Best Microwave
						</Typography>
						<Typography variant="h4" gutterBottom>
							$69.00
						</Typography>
						<Divider sx={{ marginBottom: "10px" }} />
						<Typography color="grey.main" nowrap="true">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard.
						</Typography>
						<Button
							color="error"
							elevation={0}
							variant="contained"
							sx={{ mt: 3, width: "100%" }}
						>
							Grab Product
						</Button>
					</Box>
				</Box>
			</Paper>
		</>
	);
};

export default Deals;
