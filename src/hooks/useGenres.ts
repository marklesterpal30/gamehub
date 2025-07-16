import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import genres from "../data/genres";
import { Genres } from "../entities/Genres";

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: genres,
	});

export default useGenres;
