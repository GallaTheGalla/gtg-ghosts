let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLScEPmHoNwGV25LBcFNO1W7H7Ls5cy358mGMDUaPqFcTYRblaQ/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["squidloon"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `so many colors! so much choice! and a cool font!? this balloon has it all! :scream:`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/squidloon/releases/download/v1.0.0/squidloon_v1.0.0.nar",
		changelog:
		[
			"Originally released 4/24/2021 for Ghost Jam 2021.",
			"Initial version of this balloon was only available bundled with Squid."
		]
	},
	{
		version: "v1.0.1",
		download: latest_version,
		changelog:
		[
			"New homeurl to direct to this repo. squidloon from v1.0.0 will not update to this version automatically.",
			"craftman has been renamed from galla_change to Galla & Change.",
			"Removed redundant input balloons.",
			"Removed kero balloon.",
			"Removed redundant odd number balloon."
		]
	}
	
]