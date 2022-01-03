import axios from "axios";
import { API_BASE_URL } from "../constants/constants";
class AppService {
	domain;
	constructor() {
		this.domain = API_BASE_URL;
	}

	getHeaders() {
		return {
			"Content-Type": "application/json",
			Accept: "application/json",
			// "Access-Control-Allow-Origin": "true",
		};
	}
	requestGET(path) {
		let url = this.domain + path;

		return axios.get(url, {
			headers: this.getHeaders(),
		});
	}
	requestPOST(path, data) {
		let url = this.domain + path;

		return axios.post(url, data, {
			headers: this.getHeaders(),
		});
	}
	requestDELETE(path) {
		let url = this.domain + path;

		return axios.delete(url, {
			headers: this.getHeaders(),
		});
	}
}

export default new AppService();
