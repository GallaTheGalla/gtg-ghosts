let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSe8xIM05wxwGefWfVToEYQG-STon2tRKpptFdsdmckb8oZB-g/viewform?usp=sf_link";

let latest_version = "";
if (typeof calendar_skin_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = calendar_skin_downloads["wedges_calendar_skin_pack"]
	
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
		comment: "Initial Release."
	}
	
]