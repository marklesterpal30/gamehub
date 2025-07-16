import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetail = () => {
	const { slug } = useParams();
	const { data: game } = useGame(slug!);

	return (
		<div>
			<Heading>{game?.slug}</Heading>
			<ExpandableText>{game?.description_raw || ""}</ExpandableText>
		</div>
	);
};

export default GameDetail;
