import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "rust-wiiu",
	icon: "/logo.png",
	logo: {
		light: "/logo.png",
		dark: "/logo.png",
	},
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/rust-wiiu",
			},
		],
		footer: {
			message: "&copy 2025 | Made with ❤️ by rust-wiiu",
		},
		search: false,
	},
	head: [
		[
			"meta",
			{
				name: "google-site-verification",
				content: "b4YMomL0ZmniROBALqmQF1lqjg2R4uwoy_DjJWr47YY",
			},
		],
	],
});
