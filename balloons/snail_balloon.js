let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSfxm5xJ-iKKaXmdp-r9XkNC3UgkvQYdrR8XsJgyraSlXeiVLg/viewform?usp=sf_link";

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
		changelog:
		[
			"snail_balloon is only available bundled with Snail."
		]
	}
	
]