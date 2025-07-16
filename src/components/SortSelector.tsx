import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
	const setSelectedOrder = useGameQueryStore((s) => s.setSortOrder);

	const currentSelectedSorOrder = sortOrders.find(
		(order) => order.value === selectedSortOrder
	);
	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{"Order by: " + (currentSelectedSorOrder?.label || "Relevance")}
				</MenuButton>
				<MenuList>
					{sortOrders.map((order) => (
						<MenuItem
							onClick={() => setSelectedOrder(order.value)}
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
