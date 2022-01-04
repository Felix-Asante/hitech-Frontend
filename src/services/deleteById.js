import http from "./app-service";

const deleteById = (endPoint) => {
	http
		.requestDELETE(endPoint)
		.then((res) => {
			// return window.location.back();
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export default deleteById;
