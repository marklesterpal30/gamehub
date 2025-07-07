import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

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
					cardcount.map((c, index) => (
						<GameCardContainer>
							<GameCardSkeleton key={index} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
