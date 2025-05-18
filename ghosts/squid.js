let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSfWDnRJsqWDsudu8Q_Suv8zKppEXYoSfNIYxaXoAq6VA717NQ/viewform?usp=sf_link";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["squid"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `squid squid squid squid squid`,
		attribution: "Zichqec, October 14, 2022"
	},
	{
		review: `the only ghost you'll ever need in your life. it wiggles! it's colorful! it asks obnoxious questions! what more could you ask for?`,
		attribution: "Zichqec, October 15, 2022"
	},
	{
		review: `&#10024;<i>colours</i>&#10024;`,
		attribution: "StrangelyKai, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/squid_gc/releases/download/v1.0.0/squid_gc_v1.0.0.nar",
		changelog:
		[
			"Low-key adorable low-key threatening",
			"Squid offers its vast knowledge of the multiverse, the incredible ability to morph its colors, and can even keep track of the fickle human creation that is time."
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/GallaTheGalla/squid_gc/releases/download/v1.0.1/squid_gc_v1.0.1.nar",
		changelog:
		[
			"Timer bug patch"
		]
	},
	{
		version: "v1.0.2",
		download: "https://github.com/GallaTheGalla/squid_gc/releases/download/v1.0.2/squid_gc_v1.0.2.nar",
		changelog:
		[
			"Fixed timer opening menu when it shouldn't. Fixed envelopes."
		]
	},
	{
		version: "v1.0.3",
		download: latest_version,
		changelog:
		[
			"New homeurl to direct to this repo. Squid from previous versions will not update to this version automatically.",
			"File directory has been renamed from gc_squid to squid_gc.",
			"craftman has been renamed from galla_change to Galla & Change.",
			"Adjusted shell code for smoother animations.",
			"Fixed dialogue when unminimizing Squid."
		]
	}
	
]