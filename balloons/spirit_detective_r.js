let reviewurl = "";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["spirit_detective_r"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `round rounds round round round, but it still has fluff!!!`,
		attribution: "Zichqec, November 13, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: "https://github.com/GallaTheGalla/spirit_detective/releases/download/v1.0.0/spirit_detective_r_v1.0.0.nar",
		comment: "Initial Release."
	},
	{
		version: "v1.0.1",
		download: "https://github.com/GallaTheGalla/spirit_detective/releases/download/v1.0.1/spirit_detective_r_v1.0.1.nar",
		comment: "Adjusted margins and wordwrap."
	},
	{
		version: "v1.0.2",
		download: latest_version,
		comment: "Added anchor.pen and cursor settings."
	}
	
]