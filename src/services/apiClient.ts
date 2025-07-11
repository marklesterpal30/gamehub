import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a90c848d4ca7432bbf871e1224694f9e",
	},
});

export interface FetchResponse<T> {
	count: number;
	results: T[];
}
