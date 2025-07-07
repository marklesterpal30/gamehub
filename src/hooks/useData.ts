import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(
		() => {
			setIsLoading(true);
			const controller = new AbortController();
			apiClient
				.get<FetchResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((res) => {
					setData(res.data.results);
					console.log(res.data.count);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setIsLoading(false);
					setError(err.message);
				});

			return () => controller.abort();
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};

export default useData;
