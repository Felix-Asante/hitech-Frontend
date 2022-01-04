import { useState, useEffect } from "react";
import http from "../services/app-service";

const useFetch = (endPoint) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		http
			.requestGET(endPoint)
			.then((res) => {
				setData(res.data.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(true);
			});
	}, [endPoint]);
	return { data, isLoading, error };
};

export default useFetch;
