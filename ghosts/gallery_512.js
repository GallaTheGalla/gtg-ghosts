let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSet_tiUGWLBnUDe7GipX6899280bF30zOE1zdo9QXUiTMP5Ug/viewform?usp=sf_link";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["balloons"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: ``,
		attribution: ""
	}
	
]

let version_history = [

	{
		version: "Download Balloons here!",
		download: latest_version,
		comment: "The most recent update can be found on Zichqec's site!",
	}
	
]