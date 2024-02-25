let reviewurl = "https://forms.gle/sNhWvL9mALTMnBzM8";

let latest_version = "";
if (typeof shell_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = shell_downloads["polished"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `Pointy!!!! :scream:`,
		attribution: "Claw Grasshammer, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: latest_version,
		comment: "Initial Release."
	}
	
]