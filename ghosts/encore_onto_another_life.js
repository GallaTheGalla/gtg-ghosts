let reviewurl = "https://forms.gle/uJA5R5D2h8kmGGxR9";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["encore_onto_another_life"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `Review`,
		attribution: "Name, October 15, 2022"
	}
	
]

let version_history = [

	{
		version: "Ghost Masquerade 6",
		download: "https://github.com/GallaTheGalla/encore_onto_another_life/releases/download/ghost_masquerade_6/encore_onto_another_life.zip",
		changelog:
		[
			"Ghost Masquerade 6 release. This version is not set up for updates, as per the Ghost Masquerade rules.",
		]
	},
	{
		version: "v1.0.0",
		download: latest_version,
		changelog:
		[
			"Official release.",
			"The thumbnail has been edited for easier readability.",
		]
	}
	
]