import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const cardcount = [1, 2, 3, 4, 5, 11];
	return (
		<>
			{error && <Text>{error.message}</Text>}

			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
				{isLoading &&
					cardcount.map((c) => (
						<GameCardContainer key={c}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.results.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
