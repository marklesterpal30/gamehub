import useGenres, { Genres } from "../hooks/useGenres";
import {
	HStack,
	List,
	ListItem,
	Text,
	Image,
	Spinner,
	Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
	onSelectedGenre: (genre: Genres) => void;
	selectedGenre: Genres | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<List spacing={3}>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
							alt={genre.name}
						/>

						<Button
							onClick={() => onSelectedGenre(genre)}
							fontSize="lg"
							fontWeight={
								selectedGenre?.id === genre.id ? "bold" : "normal"
							}
							variant="link"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
