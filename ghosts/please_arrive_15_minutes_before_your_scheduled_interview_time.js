let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSdvn3wJYnY-0byYwteZqyCntqZKpJMVLwX6YgvHKDogr-XIog/viewform?usp=sf_link";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["please_arrive_15_minutes_before_your_scheduled_interview_time"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `I've been to 41 interviews with him so far, and I think it's going well! After a little over 500 hours of discussion, I'm feeling pretty confident about the position, and I think this will make a good career for me. I'm going to meet him for another interview soon, where hopefully we'll get the last details settled. Wish me luck!`,
		attribution: "Zichqec, February 26, 2024"
	}
	
]

let version_history = [

	{
		version: "Version 1.0.0",
		download: latest_version,
		changelog:
		[
			"Ghost Jam 2023 release.",
		]
	}
	
]