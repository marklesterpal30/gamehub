import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	const cardcount = [1, 2, 3, 4, 5, 11];
	return (
		<>
			{error && <Text>{error}</Text>}

			<SimpleGrid
				padding={10}
				columns={{ sm: 1, md: 2, lg: 3 }}
				spacing={10}
			>
				{isLoading &&
					cardcount.map((c, index) => <GameCardSkeleton key={index} />)}
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
