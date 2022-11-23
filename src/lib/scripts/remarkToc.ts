import { Node, toc } from "mdast-util-toc/lib";

/* Credits :- https://github.com/remarkjs/remark-toc */
/* This is simply to add some personal customisations */
type tocNode = Node & {
	children: Node[];
};

export const remarkToc = () => {
	return (node: tocNode) => {
		const res = toc(node, { heading: "Table of Contents", maxDepth: 3 });
		if (
			res.endIndex === null ||
			res.index === null ||
			res.index === -1 ||
			!res.map
		) {
			return;
		}

		node.children = [
			...node.children.slice(0, res.index),
			res.map,
			...node.children.slice(res.endIndex),
		];
	};
};
