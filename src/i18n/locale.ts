export const locales = ["en", "zh-cn", "zh-tw", "ja"] as const;

export type Locale = (typeof locales)[number];

export type RoutePath = "" | "gear" | "play";

export const htmlLang: Record<Locale, string> = {
	en: "en",
	"zh-cn": "zh-Hans",
	"zh-tw": "zh-Hant",
	ja: "ja",
};

export const localeLabel: Record<Locale, string> = {
	en: "English",
	"zh-cn": "简体",
	"zh-tw": "繁體",
	ja: "日本語",
};

export function isLocale(value: string | undefined): value is Locale {
	return locales.some((locale) => locale === value);
}

export function localePaths() {
	return locales.map((locale) => ({ params: { locale } }));
}
