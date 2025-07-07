import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";
const GenreList = () => {
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
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
