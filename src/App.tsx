import { useState } from "react";
import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
	genre: Genres | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
	publisher: string;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<div>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area="nav">
					<Navbar
						onSearchText={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}
					/>
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" padding={5}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectedGenre={(genre) =>
								setGameQuery({ ...gameQuery, genre })
							}
						/>
					</GridItem>
				</Show>
				<GridItem area="main">
					<Box paddingLeft={7} padding={2}>
						<GameHeading gameQuery={gameQuery} />
						<HStack spacing={5} marginBottom={4}>
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectedPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
							/>
							<SortSelector
								selectedSortOrder={gameQuery.sortOrder}
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
							/>
						</HStack>
						<GameGrid gameQuery={gameQuery} />
					</Box>
				</GridItem>
			</Grid>
		</div>
	);
};

export default App;
