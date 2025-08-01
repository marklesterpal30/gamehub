import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { scale } from "framer-motion";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			_hover={{
				transform: "scale(1.03)",
				transition: "transform .15s ease-in",
			}}
			borderRadius={10}
			overflow="hidden"
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
