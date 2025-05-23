let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSfG6xRZ2Ffg8QRWPmgYzSHG7UvnM0zVZ8mkASUZ9uSP7UHO6A/viewform";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["ssp_angel"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `Well this ghost answered all my SSP questions, but Angel keeps asking for a pay raise so I'm not sure I can give it full stars`,
		attribution: "Zichqec, February 26, 2024"
	}
	
]

let version_history = [

	{
		version: "v0.0.1 Beta",
		download: "https://github.com/Zichqec/SSP_Angel/releases/download/v0.0.1-beta/ssp_angel_v0.0.1-beta.nar",
		changelog:
		[
			"Beta release for testing.",
		]
	},
	{
		version: "v0.0.2 Beta",
		download: "https://github.com/Zichqec/SSP_Angel/releases/download/v0.0.2-beta/ssp_angel_v0.0.2-beta.nar",
		changelog:
		[
			"Updated with several bugfixes, grammar fixes, some code cleanup, and some additional dialogue.",
		]
	},
	{
		version: "v1.0.0",
		download: "https://github.com/Zichqec/SSP_Angel/releases/download/v1.0.0/ssp_angel.nar",
		changelog:
		[
			"The first release of SSP Angel.",
			"Additional balloons can be downloaded through the ghost.",
		]
	},
	{
		version: "v1.0.1",
		download: "https://github.com/Zichqec/SSP_Angel/releases/download/v1.0.1/ssp_angel.nar",
		changelog:
		[
			"Moved changelog to GitHub",
			"Add dialogues for installing the special balloons made for this ghost",
			"Improved navigation related to opening the glossary by clicking on highlighted words",
			"Removed timeout on menus with technical explanations",
			"Removed long explanation of talk topic setting and updated the labels, to make it nicer to navigate",
			"Fixed some words that weren't highlighted properly",
			"Fixed some missing markers and word wrap issues",
		]
	},
	{
		version: "v1.1.0",
		download: "https://github.com/Zichqec/SSP_Angel/releases/download/v1.1.0/ssp_angel_v1.1.0.nar",
		changelog:
		[
			"Added ~100 new non-tip dialogues, bringing the total to 200.",
			"Updated some incorrect information and wording, in the tip dialogues and in the menus.",
			"Corrected/updated glossary definitions: AYA, Dressup, Freeshell, Ghost/Ukagaka/Nanika, Interval, Kawari, MAKOTO, SHIORI, Sakura Script, Satori, Surface, Ukadoc.",
			"New glossary definitions: Animation, Element, Middleware, Owner draw menu, and Supplement.",
			"Added new questions to the 'How do I' menu: Fast forwarding through text, Using the ghost explorer.",
			"Added the ability to ask who they are in the question menu, to have them reintroduce themselves.",
			"Added a new troubleshooting option related to installation trouble. This information was originally in the 'How do I' menu and has been moved.",
			"Added a dressup to Angel that allows her to float up and down.",
			"Added a response for switching to the <a href='https://whataphantasia.github.io/projects/ukagaka/extra/apgijinka'>PH Gijinka</a> shell, and responses to that shell's hat dressup.",
			"Updated the Ukadoc links in Pilot's menu, they now go to Ukadoc's main page since the Ukadoc translation is complete!",
			"Changed the AYAYA link to go to AYAYA's Manual page now instead of just the function list.",
			"Updated links for Yuyudev and Zichqec to be current.",
			"Updated YAYA to Tc571-8, and updated the system dictionary files.",
			"Renamed some surfaces to better reflect how the element system is supposed to be used.",
			"Added a surface0.png and surface10.png to be used as quick previews by external applications.",
			"Fixed an issue where, when refusing to install something, they would say its name instead of its type.",
			"Fixed an issue where closing the credits dialogue early would result in Angel continuing to talk even with Pilot's balloon closed.",
			"Fixed an incorrect surface call when poking Pilot with <a href='https://gallathegalla.github.io/gtg-ghosts/ghosts/needle'>Needle.</a>",
			"Fixed a bug with the wrong dialogues being used when switching shells.",
		]
	},
	{
		version: "v1.1.1",
		download: "https://github.com/Zichqec/SSP_Angel/releases/download/v1.1.1/ssp_angel_v1.1.1.nar",
		changelog:
		[
			"Added custom calibration for the plugin <a href='https://gallathegalla.github.io/gtg-ghosts/plugin/spectre.html'>Spectre.</a>",
			"Tweaked some wording.",
			"Switched some menu choices to a format that is better when using other balloons.",
		]
	},
	{
		version: "v1.1.2",
		download: latest_version,
		changelog:
		[
			"Added a glossary entry for <a href='https://github.com/kanadelab/aosora-shiori'>Aosora</a>. This entry is expected to be temporary and change over time depending on the development of Aosora.",
			"Added responses for <a href='https://github.com/Okuajub/LOBO-Ukagaka/releases/latest'>LOBO's</a> howling and <a href='https://whataphantasia.github.io/projects/ukagaka/ghosts/zzzzzzzzz'>zzzzzzzzz's</a> overlap event.",
			"If you use them to create a .nar file they can now take you to the exact file when opening the explorer window.",
			"Some minor adjustments and fixes.",
		]
	}
	
]