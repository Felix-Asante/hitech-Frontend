import React, { useState, useEffect, useRef } from "react";
import {
	Paper,
	Box,
	Typography,
	Button,
	CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import http from "../../../services/app-service";
import Snackbars from "../../Snackbars";

// REGISTER FILEPOND DEPENDENCIES
registerPlugin(
	FilePondPluginImageExifOrientation,
	// FilePondPluginImagePreview,
	FilePondPluginFileEncode
);

const useStyle = makeStyles((theme) => ({
	form: {
		display: "grid",
		gridTemplateColumns: "repeat(2,1fr)",
		gridGap: "1.5rem",
	},
	label: {
		fontWeight: "bold",
		display: "block",
		marginBottom: "12px",
		fontSize: "14px",
		fontFamily: '"Roboto", sans-serif;',
	},
	input: {
		border: "1px solid #555",
		padding: "15px 12px",
		borderRadius: "20px",
		width: "100%",
	},
	paper: {
		borderRadius: "10px",
		boxShadow: "1px 1px solid #f4f4f4",
		padding: "3rem",
	},
	submit: {
		gridRowStart: 4,
	},
}));
const NewProduct = () => {
	const classes = useStyle();
	const [description, setDescription] = useState("");
	const [categoryData, setCategoryData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState({});
	const [open, setOpen] = useState(false);
	const descriptionHandler = (value) => {
		setDescription(value);
	};
	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link", "image"],
			["clean"],
		],
	};
	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
	];
	const [files, setFiles] = useState([]);
	// files.length > 0 && console.log(files[0].getFileEncodeDataURL());
	console.log(files);

	useEffect(() => {
		http.requestGET("/category").then((res) => setCategoryData(res.data.data));
	}, []);

	const productNameRef = useRef();
	const quantityRef = useRef();
	const weightRef = useRef();
	const priceRef = useRef();
	const selectRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const productName = productNameRef.current.value.trim();
		const quantity = quantityRef.current.value.trim();
		const price = priceRef.current.value.trim();
		const categoryId = selectRef.current.value.trim();
		const weight = weightRef.current.value.trim();
		const des = description;

		const productPhotos = files.reduce((prev, current) => {
			return prev.concat({ image: current.getFileEncodeDataURL() });
		}, []);

		const data = {
			productName,
			productPhotos,
			description: des,
			categoryId,
			weight,
			price,
			dateCreated: new Date(),
			quantity,
		};

		http
			.requestPOST("/product", data)
			.then((res) => {
				console.log(res);
				setIsLoading(false);
				setResponse({ message: res.data.message, status: res.status });
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setResponse({ message: "An error occurred", status: 404 });
			});
		setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	return (
		<Box sx={{ flex: "4", p: 4, height: "calc(100vh - 80px)" }}>
			<Paper elevation={0} className={classes.paper}>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Box>
						<Typography
							variant="label"
							component="label"
							className={classes.label}
						>
							Product Name
						</Typography>
						<Box
							component="input"
							type="text"
							placeholder="eg:42 inch TCL Tv"
							name="productname"
							className={classes.input}
							ref={productNameRef}
							required
						/>
					</Box>
					<Box>
						<Typography
							variant="label"
							component="label"
							className={classes.label}
						>
							Category
						</Typography>
						<Box
							component="select"
							className={classes.input}
							ref={selectRef}
							required
						>
							{/* useState to set the selected category */}
							{categoryData.map((item) => {
								return (
									<Box component="option" value={item._id} key={item._id}>
										{item.name}
									</Box>
								);
							})}
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Box>
							<Typography
								variant="label"
								component="label"
								className={classes.label}
							>
								Weight(Kg)
							</Typography>
							<Box
								component="input"
								type="number"
								placeholder="eg:42"
								name="weight"
								className={classes.input}
								ref={weightRef}
								required
							/>
						</Box>
						<Box>
							<Typography
								variant="label"
								component="label"
								className={classes.label}
							>
								Quantity
							</Typography>
							<Box
								component="input"
								type="number"
								placeholder="eg:42"
								name="quantity"
								className={classes.input}
								ref={quantityRef}
								required
							/>
						</Box>
					</Box>
					<Box>
						<Typography
							variant="label"
							component="label"
							className={classes.label}
						>
							Price($)
						</Typography>
						<Box
							component="input"
							type="number"
							placeholder="eg:42"
							name="price"
							className={classes.input}
							ref={priceRef}
							required
						/>
					</Box>
					<Box>
						<Typography
							variant="label"
							component="label"
							className={classes.label}
						>
							Description
						</Typography>
						{/* <Box
							component="textarea"
							// type="text"
							placeholder="eg:product description"
							name="price"
							className={classes.input}
							gridColumn={2}
						/> */}
						<ReactQuill
							value={description}
							onChange={descriptionHandler}
							// className={classes.input}
							theme="snow"
							formats={formats}
							modules={modules}
						/>
					</Box>
					<Box>
						<Typography
							variant="label"
							component="label"
							className={classes.label}
						>
							Product photos
						</Typography>
						<FilePond
							files={files}
							onupdatefiles={setFiles}
							allowMultiple={true}
							maxFiles={3}
							name="productPhotos"
							labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
						/>
					</Box>
					<Box
						sx={{
							position: "relative",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Button
							color="error"
							type="submit"
							variant="contained"
							className={classes.submit}
							disabled={isLoading}
							sx={{ flex: 1 }}
						>
							Add product
						</Button>
						{isLoading && (
							<CircularProgress
								sx={{
									color: "error",
									position: "absolute",
									top: "50%",
									left: "50%",
									marginTop: "-12px",
									marginLeft: "-12px",
								}}
							/>
						)}
					</Box>
				</form>
				<Snackbars
					open={open}
					message={response.message}
					status={response.status}
					handleClose={handleClose}
				/>
			</Paper>
		</Box>
	);
};

export default NewProduct;
