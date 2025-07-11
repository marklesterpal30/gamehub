// import React from "react";
// import usePublisher from "../hooks/usePublisher";
// import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { BsChevronDown } from "react-icons/bs";

// interface Props {
// 	onSelectPublisher: (publisher: string) => void;
// }

// const PublisherSelector = ({ onSelectPublisher }: Props) => {
// 	const { data } = usePublisher();
// 	return (
// 		<Menu>
// 			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
// 				Publisher
// 			</MenuButton>
// 			<MenuList>
// 				{data.map((publisher) => (
// 					<MenuItem onClick={() => onSelectPublisher(publisher.slug)}>
// 						{publisher.name}
// 					</MenuItem>
// 				))}
// 			</MenuList>
// 		</Menu>
// 	);
// };

// export default PublisherSelector;
