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
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/snail_b_gcm/releases/download/v1.0.0/snail_b_gcm_v1.0.0.nar",
		changelog:
		[
			"Originally released 4/25/2020 for Ghost Jam 2020.",
			"Initial version of this balloon was only available bundled with Snail."
		]
	},
	{
		version: "v1.0.1",
		download: latest_version,
		changelog:
		[
			"New homeurl to direct to this repo. snail_balloon from v1.0.0 will not update to this version automatically.",
			"File directory has been renamed from gcm_snail_b to snail_b_gcm.",
			"craftman has been renamed from galla_change_misu to Galla & Change & Misu.",
			"Removed redundant input balloons.",
			"Removed kero balloon.",
			"Removed redundant odd number balloon."
		]
	}
	
]