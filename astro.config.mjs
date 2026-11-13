// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://ra1no3o.dev",
	trailingSlash: "never",
	i18n: {
		locales: ["en", "zh-cn", "zh-tw", "ja"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
