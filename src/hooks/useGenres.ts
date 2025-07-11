import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import genres from "../data/genres";

export interface Genres {
	id: number;
	name: string;
	image_background: string;
}

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
