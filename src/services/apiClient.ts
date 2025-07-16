import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a90c848d4ca7432bbf871e1224694f9e",
	},
});

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	get = (id: number | string) => {
		return axiosInstance
			.get<T>(this.endpoint + "/" + id)
			.then((res) => res.data);
	};
}

export default APIClient;
