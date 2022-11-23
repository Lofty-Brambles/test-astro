import type { Node } from "mdast-util-toc/lib";
import { visit } from "unist-util-visit";

export const downgradeHeadings = () => {
	return (tree: Node) => {
		visit(tree, (node: Node) => {
			if (node.type === "heading") node.depth++;
		});
	};
};
