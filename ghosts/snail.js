let reviewurl = "";

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
		review: `so many clothes to choose from, i can't decide! being this cute is illegal <i>i'm calling the snail cops!!`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download Snail here!",
		download: latest_version,
		comment: "The most recent update can be found on Changeside's site!"
	}
	
]