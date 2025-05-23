let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSfj2td99a2TfQoBLKrvPCd8mC7210JW5dsuf7WQfcH3j9QA_g/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["keep_frozen"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `I didn't know this ghost would turn me into a digital item-hoarding goblin, but it has. Sorry ice cubes, but I'm going to have to request that you melt as fast as possible so I can add more eggs to my fruit collection.`,
		attribution: "Zichqec, February 26, 2024"
	}
	
]

let version_history = [

	{
		version: "v1.0.0",
		download: "https://github.com/Zichqec/KEEP_FROZEN/releases/download/v1.0.0/KEEP_FROZEN_v1.0.0.nar",
		changelog:
		[
			"Ghost Masquerade 5 release. This version is not set up for updates, as per the Ghost Masquerade rules.",
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/Zichqec/KEEP_FROZEN/releases/download/v1.0.1/KEEP_FROZEN_v1.0.1.nar",
		changelog:
		[
			"The balloon will now attempt to resize based on the length of dialogue. This may be toggled off in the settings.",
			"Added a thumbnail.",
			"Updated the craftman and homeurl.",
			"Tweaked the menu so that you can no longer get a new ice cube until you have collected the current item. This should reduce confusion about item collection.",
			"Fixed an issue where sometimes the wrong item would appear in the firstboot.",
			"Fixed an issue where sometimes the list of items would not be populated.",
			"Fixed an issue where items that were currently out would not be cleared upon resetting.",
			"Fixed an issue where sometimes items would appear offscreen.",
			"Fixed a typo in the randomtalk, and one dialogue that was not capitalized properly.",
			"Fixed an issue where cubes lived for one second longer than they should have.",
		]
	},
	{
		version: "v1.1.0",
		download: "https://github.com/Zichqec/KEEP_FROZEN/releases/download/v1.1.0/KEEP_FROZEN_v1.1.0.nar",
		changelog:
		[
			"Several new items to collect, including the new categories 'bug' and 'cold'.",
			"An additional 100 entries for the dialogue, bringing the total to 400.",
			"Ice cubes will no longer count towards your stats if you've had them for less than 5 minutes. This means you will no longer tank your lifetime stats by accidentally opening the ghost and then quickly closing it. You can also repeatedly get new ice cubes from the menu to cycle for items that you want.",
			"The way items are displayed is now handled differently, and should make items easier to add in the future. This does mean that upon updating, all your existing items will change position, but in the future this should be less likely to happen again.",
			"There is now a button in the settings menu to reset the position of all items on screen to the position of the ice cube. This only appears if there are items currently displayed.",
			"There is now a button in the settings menu to hide all visible items. This only appears if there are items currently displayed.",
			"Ice cube now tracks how many times you have poked it with <a href='https://gallathegalla.github.io/gtg-ghosts/ghosts/needle.html'>Needle</a>.",
			"Ice cube now has a reaction when poked by Needle, though you may not notice it straight away.",
			"Similarly, it now has a reaction if you refuse to put it in the freezer when asked.",
			"The way new items are chosen has been changed to be more random, to avoid items being too evenly distributed. When drawing a new item, the previous 5 items will not be chosen. Otherwise, it is random.",
			"Added some QOL features from the <a href='https://ukagaka.zichqec.com/template/simplicity_template'>Simplicity Template</a> (Update dialogue, install dialogue, etc.).",
			"Updated the YAYA dic files.",
		]
	},
	{
		version: "v1.1.1",
		download: "https://github.com/Zichqec/KEEP_FROZEN/releases/download/v1.1.1/KEEP_FROZEN_v1.1.1.nar",
		changelog:
		[
			"Fixed an issue where a <a href='https://gallathegalla.github.io/gtg-ghosts/ghosts/needle.html'>Needle</a>-related easter egg was not initialized properly and would generate a blank entry. If you were already affected by this bug, this patch should correct the problem!",
		]
	},
	{
		version: "v1.1.2",
		download: latest_version,
		changelog:
		[
			"Added custom calibration for the plugin <a href='https://gallathegalla.github.io/gtg-ghosts/plugin/spectre.html'>Spectre</a>.",
			"Cubes that have existed for a negative amount of time will no longer be recorded.",
			"Added one randomtalk.",
			"Some minor menu adjustments.",
		]
	}
	
]