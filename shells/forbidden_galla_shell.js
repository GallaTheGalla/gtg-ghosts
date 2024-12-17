let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSefvBKMP7BeKZmBFTz06-GxzuouyhYaVHJ_N0JaC11c-OoASA/viewform?usp=sf_link";

let latest_version = "";
if (typeof shell_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = shell_downloads["forbidden_galla_shell"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `roundly pointy`,
		attribution: "Claw Grasshammer, April 9, 2023"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: latest_version,
		changelog:
		[
			"Initial Release."
		]
	}
	
]