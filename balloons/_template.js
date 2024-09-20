let reviewurl = "https://docs.google.com/forms/TEMPLATE";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["TEMPLATE"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `review`,
		attribution: "Name, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download TEMPLATE here!",
		download: latest_version,
		comment: "The most recent update can be found on Zichqec's site!"
	}
	
]