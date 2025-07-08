import React, { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearchText: (searchText: string) => void;
}

const SearchInput = ({ onSearchText }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (inputRef.current) {
					onSearchText(inputRef.current.value);
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={inputRef}
					borderRadius={20}
					placeholder="Searh games..."
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
