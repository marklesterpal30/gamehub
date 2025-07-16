import React from "react";
import { Game } from "../entities/Game";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<div>
			<Card>
				<Image
					height="311px"
					src={getCroppedImageUrl(game.background_image)}
				/>
				<CardBody>
					<HStack justifyContent={"space-between"} marginBottom={2}>
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Link to={`/games/${game.slug}`}>
						<Heading fontSize={"2xl"}>{game.name}</Heading>
					</Link>
				</CardBody>
			</Card>
		</div>
	);
};

export default GameCard;
