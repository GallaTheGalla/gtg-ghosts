let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSet_tiUGWLBnUDe7GipX6899280bF30zOE1zdo9QXUiTMP5Ug/viewform?usp=sf_link";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["gallery_512"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `They said mean things about the stuff on my desktop. 10/10 would recommend to a friend.`,
		attribution: "Zichqec, February 26, 2024",
	},
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: "https://github.com/Zichqec/gallery_512/releases/download/v1.0.0/gallery_512_v1.0.0.nar",
		changelog:
		[
			"Ghost Jam 2023 release.",
		]
	},
	{
		version: "v1.0.1",
		download: latest_version,
		changelog:
		[
			"Fix network update url being missing.",
		]
	},
	
]