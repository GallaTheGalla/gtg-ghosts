let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLScJmQIsIaPr97279Tf7ZmSWenTMDj-TNbCmUK9lJF_i8WtUVg/viewform?usp=sf_link";

let latest_version = "";
if (typeof shell_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = shell_downloads["dollhouse_drinks"]
	
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