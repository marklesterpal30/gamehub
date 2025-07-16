import useGenres from "../hooks/useGenres";
import { Genres } from "../entities/Genres";
import {
	HStack,
	List,
	ListItem,
	Text,
	Image,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List spacing={3}>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								objectFit="cover"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
								alt={genre.name}
							/>

							<Button
								whiteSpace="normal"
								textAlign="left"
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize="lg"
								fontWeight={
									selectedGenreId === genre.id ? "bold" : "normal"
								}
								variant="link"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
