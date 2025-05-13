let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSdEeabezM3Ox4RARbCptFdfKojqCKKvFfZPdmDvKhU7hmMQqQ/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["how_to_remember_your_friends"]
	
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
		download: "https://github.com/GallaTheGalla/how_to_remember_your_friends/releases/download/ghost_masquerade_6/how_to_remember_your_friends.zip",
		changelog:
		[
			"Initial release of How To Remember Your Friends for Ghost Masquerade 6. This version is not set up for updates, as per the Ghost Masquerade rules.",
		]
	},
	{
		version: "v1.0.0",
		download: latest_version,
		changelog:
		[
			"Official release.",
		]
	},
	
]