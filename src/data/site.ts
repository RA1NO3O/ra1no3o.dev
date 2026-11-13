import type { GameId, GroupId, NoteKey } from "../i18n/copy";
import type { Locale } from "../i18n/locale";

type LocalizedLink = Record<Locale, string>;

function apple(path: string): LocalizedLink {
	return {
		en: `https://www.apple.com/${path}/`,
		"zh-cn": `https://www.apple.com.cn/${path}/`,
		"zh-tw": `https://www.apple.com/tw/${path}/`,
		ja: `https://www.apple.com/jp/${path}/`,
	};
}

function asus(path: string): LocalizedLink {
	return {
		en: `https://www.asus.com/${path}/`,
		"zh-cn": `https://www.asus.com.cn/${path}/`,
		"zh-tw": `https://www.asus.com/tw/${path}/`,
		ja: `https://www.asus.com/jp/${path}/`,
	};
}

function rog(path: string): LocalizedLink {
	return {
		en: `https://rog.asus.com/${path}/`,
		"zh-cn": `https://rog.asus.com.cn/${path}/`,
		"zh-tw": `https://rog.asus.com/tw/${path}/`,
		ja: `https://rog.asus.com/jp/${path}/`,
	};
}

function razer(path: string): LocalizedLink {
	return {
		en: `https://www.razer.com/${path}`,
		"zh-cn": `https://www.razer.com/${path}`,
		"zh-tw": `https://www.razer.com/tw-zh/${path}`,
		ja: `https://www.razer.com/jp-jp/${path}`,
	};
}

function amd(path: string): LocalizedLink {
	return {
		en: `https://www.amd.com/en/${path}`,
		"zh-cn": `https://www.amd.com/zh-cn/${path}`,
		"zh-tw": `https://www.amd.com/zh-tw/${path}`,
		ja: `https://www.amd.com/ja/${path}`,
	};
}

const playstationConsole: LocalizedLink = {
	en: "https://www.playstation.com/en-us/",
	"zh-cn": "https://www.playstation.com/zh-hans-cn/",
	"zh-tw": "https://www.playstation.com/zh-hant-tw/",
	ja: "https://www.playstation.com/ja-jp/",
};

const switch2: LocalizedLink = {
	en: "https://www.nintendo.com/us/store/products/nintendo-switch-2-system-123669/",
	"zh-cn": "https://www.nintendo.com/hk/hardware/switch2/",
	"zh-tw": "https://www.nintendo.com/tw/switch2/",
	ja: "https://www.nintendo.com/jp/hardware/switch2/",
};

const ryzen = amd(
	"products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html",
);

const tufGpu = asus(
	"motherboards-components/graphics-cards/tuf-gaming/tuf-rtx4070tis-o16g-gaming",
);

const dualsense: LocalizedLink = {
	en: "https://www.playstation.com/en-us/accessories/dualsense-edge-wireless-controller/",
	"zh-cn": "https://www.playstation.com/zh-hans-cn/accessories/dualsense-edge-wireless-controller/",
	"zh-tw": "https://www.playstation.com/zh-hant-tw/accessories/dualsense-edge-wireless-controller/",
	ja: "https://www.playstation.com/ja-jp/accessories/dualsense-edge-wireless-controller/",
};

const switch2Pro: LocalizedLink = {
	en: "https://www.nintendo.com/us/store/products/nintendo-switch-2-pro-controller-123674/",
	"zh-cn": "https://store.nintendo.com.hk/00000000000069",
	"zh-tw": "https://store.nintendo.com.hk/00000000000069",
	ja: "https://store-jp.nintendo.com/item/hardware-accessory/VM_BEE_A_FSSKA",
};

const switch2Card: LocalizedLink = {
	en: "https://store-jp.nintendo.com/item/hardware-accessory/VM_BEE_A_SD01A",
	"zh-cn": "https://store.nintendo.com.hk/00000000000079",
	"zh-tw": "https://store.nintendo.com.hk/00000000000079",
	ja: "https://store-jp.nintendo.com/item/hardware-accessory/VM_BEE_A_SD01A",
};

const switch2Zelda: LocalizedLink = {
	en: "https://www.nintendo.com/us/store/products/nintendo-switch-2-the-legend-of-zelda-40th-anniversary-edition-121642/",
	"zh-cn": "https://store.nintendo.com.hk/zelda-switch2",
	"zh-tw": "https://store.nintendo.com.hk/zelda-switch2",
	ja: "https://store-jp.nintendo.com/item/hardware-accessory/VM_BEE_S_KL6CC",
};

export const site = {
	name: "Rain",
	handle: "RA1NO3O",
	url: "https://ra1no3o.dev",
};

export const profiles = [
	{ label: "GitHub", href: "https://github.com/RA1NO3O", rel: "me" },
	{ label: "X", href: "https://x.com/RA1NO3O", rel: "me" },
	{ label: "Steam", href: "https://steamcommunity.com/id/RA1NO3O" },
	{ label: "Discord", href: "https://discord.gg/KZQkrXz" },
	{ label: "Apple Music", href: "https://music.apple.com/profile/RA1NO3O" },
] as const;

export const playstation = {
	label: "PlayStation",
	href: "https://profile.playstation.com/RA1NO3O",
	handle: "RA1NO3O",
};

export type GearPart = {
	name: NoteKey | string;
	href?: string | LocalizedLink;
	note?: NoteKey | string;
	parts?: GearPart[];
};

export type GearItem = {
	name: string;
	href?: string | LocalizedLink;
	notes?: Array<NoteKey | string>;
	parts?: GearPart[];
};

export type GearGroup = {
	id: GroupId;
	items: GearItem[];
};

export const gear: GearGroup[] = [
	{
		id: "phone",
		items: [
			{
				name: "iPhone 18 Pro Max",
				href: apple("iphone-18-pro"),
			},
		],
	},
	{
		id: "tablet",
		items: [
			{
				name: "11-inch iPad Pro",
				href: apple("ipad-pro"),
				notes: ["tablet.spec"],
			},
		],
	},
	{
		id: "mac",
		items: [
			{
				name: "MacBook Pro",
				href: apple("macbook-pro"),
				notes: ["mac.spec"],
				parts: [
					{ name: "Magic Keyboard and Magic Trackpad" },
					{
						name: "Lecoo M2721PL",
						href: "https://item.m.jd.com/product/10062746266185.html",
						note: "display.lecoo",
					},
				],
			},
		],
	},
	{
		id: "desktop",
		items: [
			{
				name: "ASUS PRIME X870-P WIFI",
				href: asus("motherboards-components/motherboards/prime/prime-x870-p-wifi"),
				parts: [
					{ name: "AMD Ryzen 7 9800X3D", href: ryzen },
					{ name: "ASUS TUF Gaming GeForce RTX 4070 Ti SUPER", href: tufGpu },
					{ name: "Acer Predator Vesta II, 32GB (16GB × 2), DDR5-6000, CL28" },
					{
						name: "SSD",
						parts: [
							{ name: "WD_BLACK SN850X, 2TB" },
							{ name: "Predator N7000, 1TB, PCIe 4.0" },
							{ name: "WD_BLACK SN850, 1TB, PCIe 4.0" },
							{ name: "WD_BLACK SN850P, 2TB, PCIe 4.0" },
							{ name: "desk.sn580" },
						],
					},
				],
			},
			{
				name: "Razer Viper V4 Pro",
				href: razer("gaming-mice/razer-viper-v4-pro"),
				notes: ["mouse.white"],
			},
			{
				name: "Razer Viper V3 Pro",
				href: razer("gaming-mice/razer-viper-v3-pro"),
				notes: ["mouse.color", "mouse.backup"],
			},
			{
				name: "NuPhy Field75 HE",
				href: "https://nuphy.com/collections/he-keyboards/products/nuphy-field75-he-magnetic-switch-gaming-keyboard?variant=41482716938349",
				notes: ["keyboard.switch"],
			},
			{
				name: "ROG Swift OLED PG27UCWM",
				href: rog("monitors/27-to-31-5-inches/rog-swift-oled-pg27ucwm"),
				notes: ["monitor.rog"],
			},
			{
				name: "SANC OM32UPro",
				notes: ["monitor.spec", "monitor.sale"],
			},
		],
	},
	{
		id: "audio",
		items: [
			{
				name: "AirPods Max",
				href: apple("airpods-max"),
				notes: ["audio.max"],
			},
			{
				name: "AirPods Pro",
				href: apple("airpods-pro"),
				notes: ["audio.pro"],
			},
		],
	},
	{
		id: "consoles",
		items: [
			{
				name: "PlayStation 5",
				href: playstationConsole,
				parts: [{ name: "DualSense Edge", href: dualsense }],
			},
			{
				name: "Nintendo Switch 2",
				href: switch2,
				parts: [
					{ name: "Switch 2 Pro Controller", href: switch2Pro },
					{ name: "SanDisk microSD Express, 256GB", href: switch2Card },
				],
			},
			{
				name: "Nintendo Switch 2, The Legend of Zelda 40th Anniversary Edition",
				href: switch2Zelda,
			},
		],
	},
	{
		id: "wearable",
		items: [
			{
				name: "Apple Watch Ultra 2",
				href: apple("apple-watch-ultra-2"),
				notes: ["watch.spec"],
			},
		],
	},
];

export const games: Array<{ id: GameId; href?: string; code: string }> = [
	{ id: "nintendo", code: "SW-3157-5334-8031" },
	{ id: "zzz", href: "https://zzz.mihoyo.com", code: "16244285" },
	{ id: "pjsk-jp", href: "https://pjsekai.sega.jp", code: "6479525479460877" },
	{ id: "pjsk-cn", href: "https://pjsk.nvsgames.cn", code: "7486103284487478026" },
	{ id: "bandori", href: "https://bang-dream.bushimo.jp", code: "98915698" },
];
