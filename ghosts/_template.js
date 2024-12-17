let reviewurl = "https://docs.google.com/forms/TEMPLATE";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["TEMPLATE"]
	
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
		version: "Download Balloons here!",
		download: latest_version,
		changelog:
		[
			"The most recent update can be found on Zichqec's site!",
		]
	}
	
]