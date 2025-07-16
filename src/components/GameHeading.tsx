import React from "react";
import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatfrom";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	const platform = usePlatform(gameQuery.platformId);
	const genre = useGenre(gameQuery.genreId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
