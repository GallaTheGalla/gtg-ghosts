let reviewurl = "https://docs.google.com/forms/d/e/1FAIpQLSeCRaOIEPiTcZQuQpYaax7-zPJ_9UJZBF2GR7szIqOz8M422w/viewform?usp=sf_link";

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
		attribution: "Claw Grasshammer, October 15, 2022"
	},
	{
		review: `i want needle merch where is my needle merch`,
		attribution: "Claw Grasshammer, November 8, 2022"
	},
	{
		review: `sometimes needle talks to me and i think. yeah. i agree. not agree in a way that is actually agreeing but like, emotionally. i agree.`,
		attribution: "Starli Coffeeman, November 8, 2022"
	},
	{
		review: `wow omg they heard my request and are now distributing needle merch in craft stores everywhere`,
		attribution: "Claw Grasshammer, November 8, 2022"
	}
	{
		review: `Needle is my precious baby childe and I would do anything for it. I even started a holiday in its honor! That's how much this ghost changed my life.`,
		attribution: "Claw Grasshammer, January 1, 2024"
	}
	
]

let version_history = [
	
	{
		version: "Download Needle here!",
		download: latest_version,
		comment: "The most recent update can be found on Claw Grasshammer's site!"
	}
	
]