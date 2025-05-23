let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSetmXioWBC87-Ao5Px2jK9IfgxqTYeOGMB3lqeowiT690wJWw/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["snail"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `rocks!!!`,
		attribution: "Zichqec, October 14, 2022"
	},
	{
		review: `so many clothes to choose from, i can't decide! being this cute is illegal <i>i'm calling the snail cops!!</i>`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/snail_gcm/releases/download/v1.0.0/snail_gcm_v1.0.0.nar",
		changelog:
		[
			"Want a little comfort buddy?",
			"Snail is just a little bean that can hang around your desktop and try on many different outfits, or ramble about her (mostly rock based) interests."
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/GallaTheGalla/snail_gcm/releases/download/v1.0.1/snail_gcm_v1.0.1.nar",
		changelog:
		[
			"Homeurl changed. Snail from previous version will not update to this version automatically.",
			"Fixed OnClose so Snail can be closed while multiple ghosts are open.",
			"Facts are now crossed out in the menu until the dialogues are unlocked.",
			"Customization menu reformatted to be more compact.",
			"Adjusted probabilities for certain dialogues to appear.",
			"Snail now checks for updates on boot.",
			"Speed of blink animation adjusted.",
			"Additional dressups added."
		]
	},
	{
		version: "v1.0.2",
		download: latest_version,
		changelog:
		[
			"New homeurl to direct to this repo. Snail from previous versions will not update to this version automatically.",
			"File directory has been renamed from gcm_snail to snail_gcm.",
			"craftman has been renamed from galla_change_misu to Galla & Change & Misu.",
			"Adjusted shell code for smoother animations.",
			"Added sticky window settings to allow kero balloon to move when Snail is moved."
		]
	}
	
]