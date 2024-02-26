let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSczIelH7SLam91rH8ESSEXPIdSdNif2Gz_K05-OBXkmueNYyQ/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["paperboard"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `makes you feel oddly compelled to play minigames!`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "v1.0.0",
		download: latest_version,
		comment: "The most recent update can be found on Claw Grasshammer's site!"
	}
	
]