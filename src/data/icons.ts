const icons: Record<string, string> = {
	"github.com": "/icons/github.com.png",
	"x.com": "/icons/x.com.png",
	"steamcommunity.com": "/icons/steamcommunity.com.png",
	"discord.com": "/icons/discord.com.png",
	"discord.gg": "/icons/discord.com.png",
	"apple.com": "/icons/apple.com.png",
	"apple.com.cn": "/icons/apple.com.png",
	"music.apple.com": "/icons/apple.com.png",
	"bsky.app": "/icons/bsky.app.png",
	"bilibili.com": "/icons/bilibili.com.png",
	"space.bilibili.com": "/icons/bilibili.com.png",
	"playstation.com": "/icons/playstation.com.png",
	"profile.playstation.com": "/icons/playstation.com.png",
	"zzz.mihoyo.com": "/icons/zzz.mihoyo.com.jpg",
	"pjsekai.sega.jp": "/icons/pjsekai.sega.jp.png",
	"pjsk.nvsgames.cn": "/icons/pjsk.nvsgames.cn.png",
	"bang-dream.bushimo.jp": "/icons/bang-dream.bushimo.jp.png",
	"item.m.jd.com": "/icons/item.m.jd.com.png",
	"asus.com": "/icons/asus.com.png",
	"asus.com.cn": "/icons/asus.com.png",
	"rog.asus.com": "/icons/asus.com.png",
	"rog.asus.com.cn": "/icons/asus.com.png",
	"razer.com": "/icons/razer.com.png",
	"nuphy.com": "/icons/nuphy.com.png",
	"nintendo.com": "/icons/nintendo.com.png",
	"store-jp.nintendo.com": "/icons/nintendo.com.png",
	"store.nintendo.com.hk": "/icons/nintendo.com.png",
};

export function iconFor(href: string): string | undefined {
	try {
		const host = new URL(href).hostname.replace(/^www\./, "");
		return icons[host];
	} catch {
		return undefined;
	}
}
