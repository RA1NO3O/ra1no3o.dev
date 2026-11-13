import type { Locale } from "./locale";

export type GroupId = "phone" | "tablet" | "mac" | "desktop" | "audio" | "consoles" | "wearable";

export type NoteKey =
	| "phone.spec"
	| "tablet.spec"
	| "mac.spec"
	| "display.lecoo"
	| "desk.sn580"
	| "mouse.color"
	| "mouse.white"
	| "mouse.backup"
	| "keyboard.switch"
	| "monitor.rog"
	| "monitor.spec"
	| "monitor.sale"
	| "audio.max"
	| "audio.pro"
	| "watch.spec";

export type GameId = "nintendo" | "zzz" | "pjsk-jp" | "pjsk-cn" | "bandori";

type Copy = {
	sentence: string;
	summary: string;
	location: string;
	homeDescription: string;
	gearLede: string;
	gearDescription: string;
	playLede: string;
	playDescription: string;
	account: string;
	ids: string;
	nav: { now: string; gear: string; play: string };
	groups: Record<GroupId, string>;
	notes: Record<NoteKey, string>;
	games: Record<GameId, { name: string; note?: string }>;
};

export const copy = {
	en: {
		sentence: "Coding is the art of dancing in chains.",
		summary:
			"I'm a frontend developer. Most of what I write is Flutter. I like hardware. RPGs, roguelikes, FPS, and rhythm games, on PC and consoles. Games > reality.",
		location: "Hangzhou",
		homeDescription: "Frontend developer in Hangzhou. Hardware and games.",
		gearLede: "The machines I actually use.",
		gearDescription: "Phones, computers, audio, and consoles Rain actually uses.",
		playLede: "Accounts and public IDs.",
		playDescription: "PlayStation account and public game IDs for Rain.",
		account: "Account",
		ids: "IDs",
		nav: { now: "Now", gear: "Gear", play: "Play" },
		groups: {
			phone: "Phone",
			tablet: "Tablet",
			mac: "Mac",
			desktop: "Desktop",
			audio: "Audio",
			consoles: "Consoles",
			wearable: "Wearable",
		},
		notes: {
			"phone.spec": "256GB, Black",
			"tablet.spec": "M5, 256GB, Space Black",
			"mac.spec": "16-inch, M5 Pro, 48GB memory, 1TB",
			"display.lecoo": "27-inch, 4K at 60Hz, HDR400",
			"desk.sn580": "WD_BLUE SN580, 2TB, in a USB4 enclosure",
			"mouse.color": "Esports Green",
			"mouse.white": "White",
			"mouse.backup": "Backup",
			"keyboard.switch": "Magnetic White switches",
			"monitor.rog": "26.5-inch, 4K at 240Hz, HDR400 True Black",
			"monitor.spec": "32-inch, 4K at 240Hz, HDR400 True Black",
			"monitor.sale": "For sale",
			"audio.max": "2nd generation",
			"audio.pro": "3rd generation, USB-C case",
			"watch.spec": "49mm, Natural Titanium",
		},
		games: {
			nintendo: { name: "Nintendo", note: "Friend code" },
			zzz: { name: "Zenless Zone Zero" },
			"pjsk-jp": { name: "Project Sekai", note: "JP" },
			"pjsk-cn": { name: "Project Sekai", note: "CN" },
			bandori: { name: "BanG Dream! Girls Band Party" },
		},
	},
	"zh-cn": {
		sentence: "编程是一门戴着枷锁跳舞的艺术。",
		summary:
			"做前端开发，Flutter 写得最多。喜欢硬件。RPG、roguelike、FPS、音游都会玩。游戏＞现实。",
		location: "杭州",
		homeDescription: "杭州的前端开发。硬件和游戏。",
		gearLede: "我实际在用的机器。",
		gearDescription: "Rain 实际在用的手机、电脑、音频和游戏主机。",
		playLede: "账号和公开 ID。",
		playDescription: "Rain 的 PlayStation 账号和公开游戏 ID。",
		account: "账号",
		ids: "ID",
		nav: { now: "现在", gear: "设备", play: "游戏" },
		groups: {
			phone: "手机",
			tablet: "平板",
			mac: "Mac",
			desktop: "台式机",
			audio: "音频",
			consoles: "主机",
			wearable: "穿戴",
		},
		notes: {
			"phone.spec": "256GB, 黑色",
			"tablet.spec": "M5，256GB，深空黑色",
			"mac.spec": "16 英寸，M5 Pro，48GB 内存，1TB",
			"display.lecoo": "27 英寸，4K 60Hz，HDR400",
			"desk.sn580": "WD_BLUE SN580，2TB，USB4 硬盘盒",
			"mouse.color": "电竞绿",
			"mouse.white": "白色",
			"mouse.backup": "备用",
			"keyboard.switch": "Magnetic White 轴",
			"monitor.rog": "26.5 英寸，4K 240Hz，HDR400 True Black",
			"monitor.spec": "32 英寸，4K 240Hz，HDR400 True Black",
			"monitor.sale": "待卖出",
			"audio.max": "第二代",
			"audio.pro": "第三代，USB-C 充电盒",
			"watch.spec": "49mm，原色钛金属",
		},
		games: {
			nintendo: { name: "任天堂", note: "好友码" },
			zzz: { name: "绝区零" },
			"pjsk-jp": { name: "世界计划 缤纷舞台", note: "日服" },
			"pjsk-cn": { name: "初音未来：缤纷舞台", note: "国服" },
			bandori: { name: "BanG Dream! 少女乐团派对" },
		},
	},
	"zh-tw": {
		sentence: "程式設計是一門戴著枷鎖跳舞的藝術。",
		summary:
			"做前端開發，Flutter 寫得最多。喜歡硬體。RPG、roguelike、FPS、音遊都會玩。遊戲＞現實。",
		location: "杭州",
		homeDescription: "杭州的前端開發。硬體和遊戲。",
		gearLede: "我實際在用的機器。",
		gearDescription: "Rain 實際在用的手機、電腦、音訊和遊戲主機。",
		playLede: "帳號和公開 ID。",
		playDescription: "Rain 的 PlayStation 帳號和公開遊戲 ID。",
		account: "帳號",
		ids: "ID",
		nav: { now: "現在", gear: "設備", play: "遊戲" },
		groups: {
			phone: "手機",
			tablet: "平板",
			mac: "Mac",
			desktop: "桌上型電腦",
			audio: "音訊",
			consoles: "主機",
			wearable: "穿戴裝置",
		},
		notes: {
			"phone.spec": "256GB, 黑色",
			"tablet.spec": "M5，256GB，太空黑",
			"mac.spec": "16 吋，M5 Pro，48GB 記憶體，1TB",
			"display.lecoo": "27 吋，4K 60Hz，HDR400",
			"desk.sn580": "WD_BLUE SN580，2TB，USB4 外接盒",
			"mouse.color": "電競綠",
			"mouse.white": "白色",
			"mouse.backup": "備用",
			"keyboard.switch": "Magnetic White 軸",
			"monitor.rog": "26.5 吋，4K 240Hz，HDR400 True Black",
			"monitor.spec": "32 吋，4K 240Hz，HDR400 True Black",
			"monitor.sale": "待賣出",
			"audio.max": "第二代",
			"audio.pro": "第三代，USB-C 充電盒",
			"watch.spec": "49mm，原色鈦金屬",
		},
		games: {
			nintendo: { name: "任天堂", note: "好友碼" },
			zzz: { name: "絕區零" },
			"pjsk-jp": { name: "世界計畫 繽紛舞台", note: "日服" },
			"pjsk-cn": { name: "初音未來：繽紛舞台", note: "陸服" },
			bandori: { name: "BanG Dream! 少女樂團派對" },
		},
	},
	ja: {
		sentence: "プログラミングは、枷をはめて踊る芸術だ。",
		summary:
			"フロントエンドを書いています。いちばん多いのは Flutter です。ハードウェアが好きです。RPG、ローグライク、FPS、音ゲー。PC でも据え置きでも遊びます。ゲーム＞現実。",
		location: "杭州",
		homeDescription: "杭州のフロントエンドエンジニア。ハードウェアとゲーム。",
		gearLede: "実際に使っているマシン。",
		gearDescription: "Rain が実際に使っているスマホ、パソコン、オーディオ、ゲーム機。",
		playLede: "アカウントと公開 ID。",
		playDescription: "Rain の PlayStation アカウントと公開ゲーム ID。",
		account: "アカウント",
		ids: "ID",
		nav: { now: "いま", gear: "機材", play: "プレイ" },
		groups: {
			phone: "スマホ",
			tablet: "タブレット",
			mac: "Mac",
			desktop: "デスクトップ",
			audio: "オーディオ",
			consoles: "ゲーム機",
			wearable: "ウェアラブル",
		},
		notes: {
			"phone.spec": "256GB, 黒色",
			"tablet.spec": "M5、256GB、スペースブラック",
			"mac.spec": "16インチ、M5 Pro、メモリ 48GB、1TB",
			"display.lecoo": "27インチ、4K 60Hz、HDR400",
			"desk.sn580": "WD_BLUE SN580、2TB、USB4 外付けケース",
			"mouse.color": "エスポーツグリーン",
			"mouse.white": "ホワイト",
			"mouse.backup": "予備",
			"keyboard.switch": "Magnetic White スイッチ",
			"monitor.rog": "26.5インチ、4K 240Hz、HDR400 True Black",
			"monitor.spec": "32インチ、4K 240Hz、HDR400 True Black",
			"monitor.sale": "売却予定",
			"audio.max": "第2世代",
			"audio.pro": "第3世代、USB-C ケース",
			"watch.spec": "49mm、ナチュラルチタニウム",
		},
		games: {
			nintendo: { name: "ニンテンドー", note: "フレンドコード" },
			zzz: { name: "ゼンレスゾーンゼロ" },
			"pjsk-jp": { name: "プロジェクトセカイ", note: "日本" },
			"pjsk-cn": { name: "プロジェクトセカイ", note: "中国" },
			bandori: { name: "バンドリ！ ガールズバンドパーティ！" },
		},
	},
} satisfies Record<Locale, Copy>;
