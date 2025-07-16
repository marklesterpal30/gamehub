import { Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [expandable, setExpandable] = useState(false); // ✅ fixed typo
	const limit = 300;

	if (children.length < limit) return <Text>{children}</Text>;

	const summary = expandable ? children : children.substring(0, limit) + "...";

	return (
		<div>
			<Text>{summary}</Text>
			<Button
				size="sm"
				marginTop={2}
				onClick={() => setExpandable(!expandable)}
			>
				{expandable ? "Show Less" : "Show More"}
			</Button>
		</div>
	);
};

export default ExpandableText;
