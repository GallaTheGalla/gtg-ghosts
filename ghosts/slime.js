let reviewurl = "https://forms.gle/Lnh1oSC79jNtLLU18";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["slime"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `blip blop. squish friend.`,
		attribution: "Zichqec, October 14, 2022"
	},
	{
		review: `squish squorsh. a moist friend. here to decorate your desktop.`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: latest_version,
		comment: "Initial Release."
	}
	
]