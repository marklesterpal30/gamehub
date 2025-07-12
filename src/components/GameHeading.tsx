import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatfrom";
import useGenre from "../hooks/useGenre";
interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres();
	const { data: platforms } = usePlatforms();

	const platform = usePlatform(gameQuery.platformId);
	const genre = useGenre(gameQuery.genreId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
