let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSeVeOhpermCq1NyFVKHUOMxWudGpYMKsZaDzK66dCHR9J4bHw/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["open_exhibition"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `a balloon of balloons! so many balloons my head might explode!!! :exploding_head:`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download Balloons Balloon here!",
		download: latest_version,
		changelog:
		[
			"The most recent update can be found on Zichqec's site!"
		]
	}
	
]