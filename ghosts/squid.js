let reviewurl = "";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["squid"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `squid squid squid squid squid`,
		attribution: "Zichqec, October 14, 2022"
	},
	{
		review: `the only ghost you'll ever need in your life. it wiggles! it's colorful! it asks obnoxious questions! what more could you ask for?`,
		attribution: "Zichqec, October 15, 2022"
	},
	{
		review: `&#10024;<i>colours</i>&#10024;`,
		attribution: "StrangelyKai, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download Squid here!",
		download: latest_version,
		comment: "The most recent update can be found on Changeside's site!"
	}
	
]