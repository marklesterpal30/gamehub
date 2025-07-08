import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const currentSelectedSorOrder = sortOrders.find(
		(order) => order.value === selectedSortOrder
	);
	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{currentSelectedSorOrder?.label}
				</MenuButton>
				<MenuList>
					{sortOrders.map((order) => (
						<MenuItem
							onClick={() => onSelectSortOrder(order.value)}
							key={order.value}
							value={order.value}
						>
							{order.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
};

export default SortSelector;
