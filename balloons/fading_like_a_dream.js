let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSf8Oxtj1RqvsRHObrjo9-co-xlSt2vpJUUDrVAr_xSRFoHuTA/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["fading_like_a_dream"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `Fading Like A Dream is a very sleek and lightweight balloon, well suited for the ghost it pairs with. The aesthetic is simple and clean, with excellent readability, while still being very thematic. A lovely addition to any balloon collection.`,
		attribution: "Zichqec, June 9, 2023"
	},
	{
		review: `omg you guys can you believe galla made a simple balloon? in this day and age!? no extra sizes or customization to be found anywhere! hard drives everywhere will sing praises at the tiny footprint this balloon leaves!!`,
		attribution: "Zichqec, June 9, 2023"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: latest_version,
		comment: "Initial Release."
	}
	
]