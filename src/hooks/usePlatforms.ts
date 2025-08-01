import APIClient, { FetchResponse } from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: platforms,
	});

export default usePlatforms;
