import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { data, error, isLoading } = useGames();
	const cardcount = [1, 2, 3, 4, 5, 11];
	return (
		<>
			{error && <Text>{error}</Text>}

			<SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
				{isLoading &&
					cardcount.map((c) => (
						<GameCardContainer>
							<GameCardSkeleton key={c} />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
