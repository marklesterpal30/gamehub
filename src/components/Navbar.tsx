import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearchText: (searchText: string) => void;
}

const Navbar = ({ onSearchText }: Props) => {
	return (
		<div>
			<HStack justifyContent={"space-between"} padding="10px">
				<Image src={logo} boxSize="50px" />
				<SearchInput onSearchText={onSearchText} />
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
