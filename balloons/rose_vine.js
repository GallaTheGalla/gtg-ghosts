let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSfkOV7SowulW4o8mGosxE8X9RZCAFxm6v7LisDmLjapfUbv7g/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["rose_vine"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `a cool rose. a cool vine. what more could one ask for?`,
		attribution: "Zichqec, October 18, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: latest_version,
		changelog:
		[
			"Initial Release."
		]
	}
	
]