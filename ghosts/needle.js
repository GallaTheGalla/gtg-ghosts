let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSeCRaOIEPiTcZQuQpYaax7-zPJ_9UJZBF2GR7szIqOz8M422w/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["needle"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `NEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDLE`,
		attribution: "Claw Grasshammer, October 15, 2022",
	},
	{
		review: `i want needle merch where is my needle merch`,
		attribution: "Claw Grasshammer, November 8, 2022",
	},
	{
		review: `sometimes needle talks to me and i think. yeah. i agree. not agree in a way that is actually agreeing but like, emotionally. i agree.`,
		attribution: "Starli Coffeeman, November 8, 2022",
	},
	{
		review: `wow omg they heard my request and are now distributing needle merch in craft stores everywhere`,
		attribution: "Claw Grasshammer, November 8, 2022",
	},
	{
		review: `Needle is my precious baby childe and I would do anything for it. I even started a holiday in its honor! That's how much this ghost changed my life.`,
		attribution: "Claw Grasshammer, January 1, 2024",
	},
	
]

let version_history = [
	{
		version: "v1.0.0",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.0.0/needle_v1.0.0.nar",
		changelog:
		[
			"Ghost Jam 2022 release.",
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.0.1/needle_v1.0.1.nar",
		changelog:
		[
			"Fixed a small issue with the balloon not installing (hopefully).",
		]
	},
	{
		version: "v1.0.2",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.0.2/needle_v1.0.2.nar",
		changelog:
		[
			"Added two new envelopes, with 271 items between them!",
			"Added a few new dialogues, and items to existing envelopes.",
			"Improved detection for poking other ghosts, and added brief documentation in the code for how to implement the event.",
			"Added dialogue for changing shells.",
			"Added a check so that the same nickname will (almost certainly) not be generated twice.",
			"Added a thumbnail for the master shell.",
			"Tweaked an envelope to allow shell switching.",
			"Fixed nickname highlighting.",
			"Fixed nicknames being generated on boot when no username was set.",
			"Fixed the invisible kero character not being cleared properly.",
			"Fixed balloon sometimes freaking out when Needle was near the edge of the screen.",
			"Added events for <a href='https://github.com/YAYA-shiori/tama'>Tama</a>.",
			"Misc improvements.",
		]
	},
	{
		version: "v1.0.3",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.0.3/needle_v1.0.3.nar",
		changelog:
		[
			"Disallows illegal names that were causing issues with Needle poking other ghosts if you used them.",
		]
	},
	{
		version: "v1.1.0",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.1.0/needle_v1.1.0.nar",
		changelog:
		[
			"Fixes a critical bug that was introduced by changes to SSP, which caused Needle's talkrate to not randomize properly.",
			"Needle now has some dialogues which involve motion/jittering. These dialogues may be harmful for photosensitive individuals, and as such, are filtered unless the user explicitly opts in by following the instructions in the new enable_extra_content.txt file in needle's folder.",
			"Added 175 new idle dialogues. (A ~50% increase!)",
			"Added many new envelope entries in various places.",
			"Added new options to the name mangler.",
			"Needle will now send the name of the shell it is currently using as reference1 when it pokes a ghost.",
			"There is now a reaction if you drop a folder on Needle.",
			"Fixed an issue where Needle's balloons would all be in the same space during the first boot sequence.",
			"Updated YAYA to Tc571-5.",
		]
	},
	{
		version: "v1.1.1",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.1.1/needle_v1.1.1.nar",
		changelog:
		[
			"Moved Needle to its own repository, thus changing the homeurl. Please get this update so that you can get future Needle updates as well!",
			"Increased the total number of dialogues to 700. It's now more than double what it had on first release!",
			"Added some new envelopes, and added additional entries to some of the existing ones.",
			"Added new options to the name mangler.",
			"The name mangler is now weighted.",
			"Fixed an issue with a dialogue that wasn't displaying correctly.",
			"Fixed an issue where the balloons were not offset properly on first boot.",
			"Updated various craftman urls and such that were old.",
			"Added an easter egg that nobody will find without code snooping.",
		]
	},
	{
		version: "v1.1.2",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.1.2/needle_v1.1.2.nar",
		changelog:
		[
			"Fixed some anchors not being clickable.",
			"Removed a bandaid patch solution for some of Needle's dialogues, since the issue has now been fixed on SSP's side!",
			"Simplified the code of one of the name mangler options.",
			"Added a new easter egg to do with gestures and shells.",
			"When switching shells, Needle will now stay in roughly the same place.",
			"Added 100 additional dialogues, bringing the total to 800.",
			"Added some additional envelopes, and more entries to existing envelopes.",
			"Updated YAYA to Tc571-6.",
		]
	},
	{
		version: "v1.1.3",
		download: "https://github.com/Zichqec/Needle/releases/download/v1.1.3/needle_v1.1.3.nar",
		changelog:
		[
			"Added 200 dialogues, bringing the total to 1000.",
			"Added custom calibration for the plugin <a href='https://gallathegalla.github.io/gtg-ghosts/plugin/spectre.html'>Spectre</a>.",
			"Fixed a bug where Needle wouldn't properly save the list of what dressups it is currently using.",
			"Added special behavior for the <a href='https://gallathegalla.github.io/gtg-ghosts/shells/blushie.html'>Blushie</a> shell.",
			"Added a stamp for the <a href='http://navy.nm.land.to/post/'>スタンプ帳</a> (stamp collection) plugin. Currently it's given as one of the random dialogues, so it's rare to get!",
			"A new name mangler type, and a rarity adjustment for one of the existing types.",
			"Fixed missing craftmanw entries.",
			"Updated YAYA to Tc571-9.",
		]
	},
	{
		version: "v1.1.4",
		download: latest_version,
		changelog:
		[
			"Fixed an issue with the special behavior for the <a href='https://gallathegalla.github.io/gtg-ghosts/shells/blushie.html'>Blushie</a> shell, where it would bug out chains, and would not respect dialogues which use \C.",
			"Fixed a longstanding bug with a function that generates a 'NEEEEEDLE' of a random length. It was supposed to have a rare chance to be excessively long, and now it finally should! Enjoy.",
		]
	}
	
]