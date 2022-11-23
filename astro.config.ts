import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import prefetch from "@astrojs/prefetch";
import type { PrefetchOptions } from "@astrojs/prefetch/dist/client";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import type { RobotsTxtOptions } from "astro-robots-txt";
import compress from "astro-compress";

import { defineConfig, AstroUserConfig } from "astro/config";
import { WEBURL } from "$config";

import { remarkToc } from "$lib/scripts/remarkToc";
import { timeToRead } from "$lib/scripts/timeToRead";
import { downgradeHeadings } from "$lib/scripts/downgradeHeadings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const markdownConfig: AstroUserConfig["markdown"] = {
	remarkPlugins: [remarkToc, timeToRead, downgradeHeadings],
	rehypePlugins: [rehypeAccessibleEmojis as any],
};

const prefetchConfig: PrefetchOptions = {
	throttle: 5,
};

const robotsTxtConfig: RobotsTxtOptions = {
	policy: [
		{
			userAgent: "*",
			disallow: "/posts",
		},
	],
};

// https://astro.build/config
export default defineConfig({
	markdown: {
		...markdownConfig,
		extendDefaultPlugins: true,
	},
	integrations: [
		mdx(),
		preact(),
		prefetch(prefetchConfig),
		sitemap(),
		robotsTxt(robotsTxtConfig),
		compress(),
	],
	site: WEBURL.current(),
});
