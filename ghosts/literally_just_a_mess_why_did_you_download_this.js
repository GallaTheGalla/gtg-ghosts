let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSeJRnnMQbl1ttoAihrWUeVN3eZd4e8f2HVlHS6YsAvvrUURpQ/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["literally_just_a_mess_why_did_you_download_this"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `This ghost is like if you took all your brain thoughts, put them in a bag, shook it around for a while, and then pulled them out one pointy fragment at a time and launched them towards people at speed.`,
		attribution: "Zichqec, July 25, 2025"
	}
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: latest_version,
		changelog:
		[
			"BEHOLD",
		]
	}
	
]