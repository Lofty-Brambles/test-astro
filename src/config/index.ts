import { config } from "dotenv";

config();

export const WEBURL = {
    dev: (process.env.DEV_WEBSITE_URL || "http://localhost:3000")
        .trim()
        .replace(/\/$/g, ""),
    prod: (process.env.PROD_WEBSITE_URL || process.env.PUBLIC_VERCEL_URL!)
        .trim()
        .replace(/\/$/g, ""),
    current() {
        return import.meta.env.DEV ? this.dev : this.prod;
    },
};

// export const blogDetails = {
//     name: (process.env.BLOG_NAME || "Info Dump").trim(),
//     description: (
//         process.env.BLOG_DESCRIPTION ||
//         "Info Dump is a simple blog aimed at getting some simple thoughts out to the world."
//     ).trim(),
//     author: (process.env.BLOG_AUTHORS || "Lofty Brambles").trim(),
//     defaultTitle: (
//         process.env.BLOG_DEFAULT_TITLE || "Info Dump | Pen-time!"
//     ).trim(),
// };
