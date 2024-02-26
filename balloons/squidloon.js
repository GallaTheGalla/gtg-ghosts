let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLScEPmHoNwGV25LBcFNO1W7H7Ls5cy358mGMDUaPqFcTYRblaQ/viewform?usp=sf_link";

let latest_version = "";
if (typeof balloon_downloads != "undefined") //Check if we're on a page that needs this info, to avoid an error
{
	latest_version = balloon_downloads["squidloon"]
	
	if (document.getElementById('download'))
		document.getElementById('download').innerHTML = `<a href="${latest_version}" class="dl_button">Download latest version</a>`;
}


let reviews = [
	
	{
		review: `so many colors! so much choice! and a cool font!? this balloon has it all! :scream:`,
		attribution: "Zichqec, October 15, 2022"
	}
	
]

let version_history = [
	
	{
		version: "Download squidloon here!",
		download: latest_version,
		comment: "squidloon is only available bundled with Squid."
	}
	
]