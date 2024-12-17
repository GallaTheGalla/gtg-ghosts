let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSeEIczstnIHqnP58SgOE0Y9Puk6BMdlCS4S9nElOXU4BbkDqw/viewform?usp=sf_link";

let latest_version = "";
if (typeof shell_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = shell_downloads["slimedration"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `Squish squorsh. Chomp. Refreshing! :yum:`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/slimedration/releases/download/v1.0.0/slimedration_v1.0.0.nar",
		changelog:
		[
			"Initial Release."
		]
	},
	{
		version: "v1.0.1",
		download: latest_version,
		changelog:
		[
			"All Straws."
		]
	}
	
]