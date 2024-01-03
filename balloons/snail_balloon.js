let reviewurl = "";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["snail_balloon"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `a cute balloon for a cute snail! :smiling_face_with_3_hearts:`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download snail_balloon here!",
		download: latest_version,
		comment: "snail_balloon is only available bundled with Snail."
	}
	
]