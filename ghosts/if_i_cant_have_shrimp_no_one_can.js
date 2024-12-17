let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSciFMtV5I0ALHA7TmRhT8FxcfvxGL-SOdYix-1VUymQEgPvWg/viewform?usp=sf_link";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["if_i_cant_have_shrimp_no_one_can"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `Loud. Demanding. Angry. Feathered. What more could one want out of a ghost?`,
		attribution: "Zichqec, February 26, 2024"
	}
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/if_i_cant_have_shrimp_no_one_can/releases/download/v1.0.0/if_i_cant_have_shrimp_no_one_can_v1.0.0.nar",
		changelog:
		[
			"Idea Adoption Jam 2023 release.",
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/GallaTheGalla/if_i_cant_have_shrimp_no_one_can/releases/download/v1.0.1/if_i_cant_have_shrimp_no_one_can_v1.0.1.nar",
		changelog:
		[
			"Integrated balloon updates to new nars.",
			"Added 1 new dialogue.",
		]
	},
	{
		version: "v1.1.0",
		download: "https://github.com/GallaTheGalla/if_i_cant_have_shrimp_no_one_can/releases/download/v1.1.0/if_i_cant_have_shrimp_no_one_can_v1.1.0.nar",
		changelog:
		[
			"Added ~99 new dialogues, bringing the total to 200.",
			"Made minor adjustments to some existing dialogues.",
			"Various small tweaks.",
		]
	},
	{
		version: "v1.1.1",
		download: latest_version,
		changelog:
		[
			"Added custom calibration for the plugin Spectre.",
		]
	}
	
]