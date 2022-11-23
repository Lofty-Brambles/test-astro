import getReadTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { Node } from "mdast-util-toc/lib";

export const timeToRead = () => {
	return (tree: Node, { data }: any) => {
		const text = toString(tree);
		const readingTime = getReadTime(text);
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
};
