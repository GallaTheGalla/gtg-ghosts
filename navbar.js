//Many thanks to andrews05 in the EV Nova Discord for helping me with the initial setup for this! I've made lots of changes at this point, but it really helped me get a grasp on this.

let islocal = location.protocol == "https:" ? '' : '.html';
let ishomepage = 1;
if (!(location.pathname.endsWith("gtg-ghosts/index.html") || location.pathname.endsWith("gtg-ghosts/")))
{
	ishomepage = 0;
}


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

let deepness = 0;

//There's probably a much better way to do this, but what can I say, I don't actually know JavaScript lol
//Get how many subfolders deep we are
function findDeepness()
{
	if (ishomepage)
	{
		deepness = 0;
	}
	else
	{
		let path = location.pathname;
		
		path = path.split("gtg-ghosts/");
		
		spliturl = path[1];
		
		spliturl = spliturl.split("/");
		deepness = spliturl.length - 1;
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
		let addindex = islocal == ".html" ? 'index' : '';

		return `<a href="${path}${addindex}${islocal}">${link.title}</a>`;
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

findDeepness();
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');

if (!islocal)
{
	fixLocalLinks();
}