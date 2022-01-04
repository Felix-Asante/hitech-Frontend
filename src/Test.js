import React, { useState, useEffect } from "react";
import http from "./services/app-service";
const Test = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		http
			.requestGET("/")
			.then((res) => {
				const filteredResult = res.data.reduce((prev, current) => {
					if (!(current.data.length === 0 || current.data.length === 1)) {
						prev.push(current);
					}
					return prev;
				}, []);
				filteredResult &&
					setData(
						filteredResult.length > 2
							? filteredResult.slice(0, 1)
							: filteredResult
					);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{data &&
				data.map((item) => {
					return (
						<div>
							<h1>{item.name}</h1>
							<div style={{ display: "flex", gap: "20px" }}>
								{item.data.map((info) => {
									return (
										<>
											<img
												src={info.productPhotos[0].image}
												alt=""
												width="80px"
												height="80px"
												style={{ display: "block" }}
											/>
											<p>{info.productName}</p>
										</>
									);
								})}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Test;
