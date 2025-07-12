import useGenres, { Genres } from "../hooks/useGenres";
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

interface Props {
	onSelectedGenre: (genre: Genres) => void;
	selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

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
								onClick={() => onSelectedGenre(genre)}
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
