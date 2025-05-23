let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLScZHHE2LDf53xZaFPy4ChcuxhABzaaBMbzsPIA5Q5b_5WPOoA/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["noodle"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `I first met Noodle out behind the trash can. It saved me from a wasp that was looking to take a bite out of me. Been pals ever since.`,
		attribution: "Zichqec, February 26, 2024"
	}
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: "https://github.com/Zichqec/noodle/releases/download/v1.0.0/noodle_v1.0.0.nar",
		changelog:
		[
			"Initial release",
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/Zichqec/noodle/releases/download/v1.0.1/noodle_v1.0.1.nar",
		changelog:
		[
			"Added talk interval randomizer that was meant to be there from the beginning",
			"Removed hotkeys that weren't supposed to be there from the beginning",
		]
	},
	{
		version: "v1.0.2",
		download: "https://github.com/Zichqec/noodle/releases/download/v1.0.2/noodle_v1.0.2.nar",
		changelog:
		[
			"Fixed an issue where SSP would crash if <a href='https://gallathegalla.github.io/gtg-ghosts/ghosts/needle.html'>Needle</a> was also open and overlapped more than one ghost at a time",
			"Fixed an issue where the firstboot/boot text would disappear too quickly if Needle was open",
		]
	},
	{
		version: "v1.0.3",
		download: latest_version,
		changelog:
		[
			"Added custom calibration for the plugin <a href='https://gallathegalla.github.io/gtg-ghosts/plugin/spectre.html'>Spectre</a>.",
			"Added a couple new dialogues.",
			"Fixed a typo.",
		]
	}
	
]