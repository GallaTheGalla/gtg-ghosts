let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLScuVFJen1-r-43IoMSifKZNhsgEfYX_41GvDKPs-2mKlZ7QlQ/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["pancake_gwrawrurulrg"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `this ghost is making me hungry, but i don't really like pancakes much. help what do i do :(`,
		attribution: "Zichqec, February 26, 2024"
	}
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: latest_version,
		changelog:
		[
			"Content Warning: Contains Gore, which can be toggled in the menu.",
		]
	}
	
]