import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Genres } from "./useGenres";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					publishers: gameQuery.publisher,
				},
			}),
	});

export default useGames;
