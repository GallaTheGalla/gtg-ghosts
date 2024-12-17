let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSfDXsYuKubeOa2jHHdngCF1qFLhBW0yKd8Ijo7jvNjD5dwGbA/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["blopblop"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `blopblop! blopblop? blopblop!!`,
		attribution: "Zichqec, October 15, 2022"
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