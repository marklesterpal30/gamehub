import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
const App = () => {
	return (
		<div>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area="nav" bg="">
					<Navbar />
				</GridItem>
				<Show above="lg">
					<GridItem area="aside" bg="orange">
						Aside
					</GridItem>
				</Show>
				<GridItem area="main" bg="red">
					Main
				</GridItem>
			</Grid>
		</div>
	);
};

export default App;
