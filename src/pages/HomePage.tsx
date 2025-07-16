import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<Show above="lg">
				<GridItem area="aside" padding={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={7} padding={2}>
					<GameHeading />
					<HStack spacing={5} marginBottom={4}>
						<PlatformSelector />
						<SortSelector />
					</HStack>
					<GameGrid />
				</Box>
			</GridItem>
		</Grid>
	);
};

export default HomePage;
