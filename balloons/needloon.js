let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSezRcVAtNoOx4ViixEZX4X7ufgtD4RaV1dCHaZ46kwoLjAMcA/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["needloon"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `every ghost looks great paired with this balloon! it'll remind you of your all-time favorite ghost, even if you don't have it open for some strange reason!`,
		attribution: "Claw Grasshammer, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download Needloon here!",
		download: latest_version,
		changelog:
		[
			"The most recent update can be found on Claw Grasshammer's site!."
		]
	}
	
]