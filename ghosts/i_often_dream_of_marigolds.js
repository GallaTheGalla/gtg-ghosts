let reviewurl = "https://forms.gle/48uskUSVAMu2cWQs6";

let latest_version = "";
if (typeof ghost_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = ghost_downloads["i_often_dream_of_marigolds"]
	document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}



let reviews = [
	
	{
		review: `I Often Dream Of Marigolds is an exceptional experience crafted by a master. Detailed choices and a compelling story will keep you hooked as you work to unravel the mystery of who you're talking to, where you are, and why you're there.<br><br>I cried over it, and you should too.`,
		attribution: "Zichqec, June 9, 2023"
	}
	
]

let version_history = [
	
	{
		version: "Ghost Masquerade 5",
		download: "https://github.com/GallaTheGalla/i_often_dream_of_marigolds/releases/download/ghost_masquerade_5/i_often_dream_of_marigolds.zip",
		comment: "This version is not set up for updates, as per the Ghost Masquerade rules."
	},
	{
		version: "v1.0.0",
		download: latest_version,
		comment: "Official release."
	}
	
]