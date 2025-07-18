let islocal = location.protocol == "https:" ? '' : '.html';
let ishomepage = 1;
if (!(location.pathname.endsWith("gtg-ghosts/index.html") || location.pathname.endsWith("gtg-ghosts/")))
{
	ishomepage = 0;
}


let links = [
	{path: 'index', title: 'Home'},
	{path: 'ghosts/index', title: 'Ghosts'},
	{path: 'balloons/index', title: 'Balloons'},
	{path: 'calendars/index', title: 'Calendars'},
	{path: 'shells/index', title: 'Shells'},
	{path: 'freeshells/index', title: 'Freeshells'},
	{path: 'misc_index', title: 'Misc'}
];

/*
let links = [
	{path: 'index', title: 'Home'},
	{title: 'Ghosts', sublinks:[
		{title: '— Solo —' },
		{path: 'ghosts/i_often_dream_of_marigolds', title: 'I Often Dream Of Marigolds'},
		{title: '— Collab —' },
		{path: 'ghosts/balloons', title: 'Balloons'},
		{path: 'ghosts/needle', title: 'Needle'},
		{path: 'ghosts/paper', title: 'Paper'},
		{path: 'ghosts/slime', title: 'Slime'},
		{path: 'ghosts/snail', title: 'Snail'},
		{path: 'ghosts/squid', title: 'Squid'},
	]},
	{title: 'Shells', sublinks:[
		{path: 'shells/hydrate', title: 'Hydrate'},
		{path: 'shells/needle', title: 'Needle'},
	]},
	{title: 'Balloons', sublinks:[
		{title: '— Solo —' },
		{path: 'balloons/fading_like_a_dream', title: "Fading Like A Dream"},
		{path: 'balloons/rose_vine', title: "Rose Vine"},
		{path: 'balloons/rose_vine_s', title: "Rose VineS"},
		{path: 'balloons/spirit_detective', title: "Spirit Detective"},
		{path: 'balloons/spirit_detective_r', title: "Spirit Detective R"},
		{path: 'balloons/spirit_detective_s', title: "Spirit Detective S"},
		{title: '— Collab —' },
		{path: 'balloons/balloons_balloon', title: "Balloons Balloon"},
		{path: 'balloons/blopy', title: "blopblop"},
		{path: 'balloons/needloon', title: "Needloon"},
		{path: 'balloons/paperboard', title: "Paperboard"},
		{path: 'balloons/snail_balloon', title: "snail_balloon"},
		{path: 'balloons/squidloon', title: "squidloon"},
	]},

];
*/

let deepness = 0;

//There's probably a much better way to do this, but what can I say, I don't actually know JavaScript lol
//Get how many subfolders deep we are
function findDeepness()
{
	let path = location.pathname;
	console.log(`path ${path}`);
	console.log(`typeof path ${typeof path}`);
	if (ishomepage)
	{
		deepness = 0;
	}
	else
	{
		path = path.split("gtg-ghosts/");
		path = path[1];
		console.log(`path after split ${path}`);
		
		path = path.split("/");
		console.log(`path after splitting / ${path}`);
		deepness = path.length - 1;
		
		console.log(`deepness ${deepness}`);
	}
}

function linkHTML(link)
{	
	let path = '';
	for (let i = 0; i < deepness; i++)
	{
		path += "../";
	}
	
	
	//Special option for the home tab since we want it not to place an index.html at the end
	if (link.title == "Home")
	{
		let addindex = islocal ? 'index' : '';
		console.log(`link.title: ${link.title}`);
		console.log(`path: ${path}`);
		console.log(`islocal: ${islocal}`);
		console.log(`addindex: ${addindex}`);

		if (islocal)
		{
			return `<a href="${path}${addindex}${islocal}">${link.title}</a>`;
		}
		else
		{
			//My brain is exploding so we're going with the simple solution
			return `<a href="https://gallathegalla.github.io/gtg-ghosts/">${link.title}</a>`;
		}
	}
	//If it's a normal link
	else if (link.path)
	{
		return `<a href="${path}${link.path}${islocal}">${link.title}</a>`;
	}
	//If it's a dropdown
	else if (link.sublinks) {
		return `
			<div class="dropdown">
				<button class="dropbtn">${link.title}
				</button>
				<div class="dropdown-content">
				${link.sublinks.map(linkHTML).join('')}
				</div>
			</div>`;
	}
	else
	{
		return `<p class="navdivider">${link.title}</p>`;
	}
}

//I feel this is a bit messy, since part of the linkHTML function also appends .html depending on if it's local or not. But eh... I'm not convinced it's worth tinkering with that. Technically this should be its own file, but like, why go to the effort of having to change the path on another link for each page??? idk man.
//Anyways, this just gets all the <a> tags, and if they're linking to another page on this site and it is NOT the local version, removes the .html from each one. Makes things a bit tidier.
function fixLocalLinks()
{
	let a_links = document.getElementsByTagName("a");
	console.log(a_links);
	for (let a_link of a_links)
	{
		if (a_link.href.startsWith("https://gallathegalla.github.io/gtg-ghosts/"))
		{
			a_link.href = a_link.href.replace(".html","");
		}
	}
}

function makeFooter()
{
	let path = '';
	for (let i = 0; i < deepness; i++)
	{
		path += "../";
	}
	
	return `<div class="centerreg">
			<a href="https://twitter.com/gallathegalla"><img src="${path}twitterbutton.png" alt="Find me on Twitter" class="sBs"></a>   <a href="https://www.pillowfort.social/Galla"><img src="${path}pillowfortbutton.png" alt="Find me on Pillowfort" class="sBs"></a>   <a href="https://ukadon.shillest.net/@gallathegalla"><img src="${path}mastodonbutton.png" alt="Find me on Mastodon" class="sBs"></a>   <a href="https://ko-fi.com/gallathegalla"><img src="${path}kofibutton.png" alt="Support me on Ko-Fi" class="sBs"></a>
			<div class="pattern_mode_toggle"><button onclick="togglePatternMode()" class="pattern_mode_button"><div id="pattern_button"></div></button></div>
			<br></div>`;
}

findDeepness();
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');
document.getElementById('footer').innerHTML = makeFooter();

if (!islocal)
{
	fixLocalLinks();
}

//Pattern mode stuff, thank you https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode and https://stackoverflow.com/questions/60037491/how-to-save-cookies-for-dark-light-mode-toggle !!!

// On page load set the theme.
(function() {
	let path = '';
	for (let i = 0; i < deepness; i++)
	{
		path += "../";
	}
	
	let onpageLoad = localStorage.getItem("theme") || "purple";
	let element = document.body;
	element.classList.add(onpageLoad);
	
	if (onpageLoad == "pattern_mode")
	{
		document.getElementById('pattern_button').innerHTML = `<img src="${path}pattern_on.png" class="pattern_mode_img">`;
	}
	else
	{
		document.getElementById('pattern_button').innerHTML = `<img src="${path}pattern_off.png" class="pattern_mode_img">`;
	}
	
})();

function togglePatternMode() {
	let path = '';
	for (let i = 0; i < deepness; i++)
	{
		path += "../";
	}
	
	let element = document.body;
	element.classList.toggle("pattern_mode");
	
	let theme = localStorage.getItem("theme");
	if (theme && theme === "pattern_mode")
	{
		localStorage.setItem("theme", "purple");
		document.getElementById('pattern_button').innerHTML = `<img src="${path}pattern_off.png" class="pattern_mode_img">`;
	}
	else
	{
		localStorage.setItem("theme", "pattern_mode");
		document.getElementById('pattern_button').innerHTML = `<img src="${path}pattern_on.png" class="pattern_mode_img">`;
	}
}