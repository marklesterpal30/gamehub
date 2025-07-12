import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Button } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const cardcount = [1, 2, 3, 4, 5, 11];

	const fetchGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
	return (
		<>
			{error && <Text>{error.message}</Text>}
			<InfiniteScroll
				dataLength={fetchGamesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}
			>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
					{isLoading &&
						cardcount.map((c) => (
							<GameCardContainer key={c}>
								<GameCardSkeleton />
							</GameCardContainer>
						))}
					{data?.pages.flatMap((page) =>
						page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))
					)}
				</SimpleGrid>
			</InfiniteScroll>
			{/* {hasNextPage && (
				<Button onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)} */}
		</>
	);
};

export default GameGrid;
