let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSeUVferl_90Y3s-UPd-WvMCQZmJgsqAeu2rnYFXnIcG8ev72A/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["balloons"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `don't you just wanna click those cute faces? :)`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: "https://github.com/Zichqec/balloons/releases/download/v1.0.0/balloons_v1.0.0.nar",
		changelog:
		[
			"Ghost Jam 2022 release.",
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/Zichqec/balloons/releases/download/v1.0.1/balloons_v1.0.1.nar",
		changelog:
		[
			"Added dialogues for changing from Balloons to another ghost, so that it doesn't guilt you (as badly) for doing so.",
			"Added dialogues for if you quit SSP with multiple ghosts open, so that it doesn't guilt you (as badly) for doing so. This event is currently bugged on SSP's end at the time of this release, so do keep an eye out for SSP updates!",
			"Fixed events for changing to/from Balloons; it should no longer be invisible when it starts.",
			"Improved fade in/out, you should no longer be able to interrupt it and have semi-transparent balloons.",
			"Fixed a bug where the Angry balloon would sometimes reappear when it shouldn't.",
			"Fixed issue where balloons would sometimes flicker briefly when reappearing.",
			"Fixed issue where if all balloons were popped by <a href='https://gallathegalla.github.io/gtg-ghosts/ghosts/needle.html'>Needle</a>, they wouldn't immediately reappear.",
			"Fixed issue where you could open the menu while the balloons were all unpopping, and end up with only some or none of them.",
			"Fixed an issue where if you were on single click mode and double clicked a balloon, it would open the menu while the balloon was popping.",
			"Improved balloon collision boxes; they should be pixel perfect now.",
			"Fixed issue where the slim balloon would flicker while using the Customization menu.",
			"Slightly rearranged the main menu.",
			"Made the balloon mode toggle only appear if you're using <a href='https://gallathegalla.github.io/gtg-ghosts/balloons/balloons_balloon.html'>Balloons Balloon</a>.",
			"Fixed weird behavior when using other balloons if you had it set to Slim mode.",
			"Vastly improved the: internal code formatting for dialogues; adding new content will no longer be the death of Zi!",
			"Updated YAYA to Tc570-2.",
		]
	},
	{
		version: "v1.0.2",
		download: "https://github.com/Zichqec/balloons/releases/download/v1.0.2/balloons_v1.0.2.nar",
		changelog:
		[
			"Fixed an issue in <a href='https://gallathegalla.github.io/gtg-ghosts/balloons/balloons_balloon.html'>Balloons Balloon</a>, undetected before because of an SSP bug. Please ensure your SSP is up to date and make sure you perform a balloon update!",
			"Drastically cleaned up some code in the backend, making it much easier to add new dialogue in the future.",
			"Updated YAYA to Tc571-5.",
		]
	},
	{
		version: "v1.0.3",
		download: latest_version,
		changelog:
		[
			"Fixed an issue with network updates.",
			"Added 1 (one) new dialogue.",
			"Corrected the version number.",
		]
	}
	
]