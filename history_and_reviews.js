//Determine what type we're looking at
let temp = location.pathname;
temp = temp.split("/");
let pagetype = temp[temp.length - 2];
let pagename = temp[temp.length - 1];
if (!(pagetype == "reviews" || pagetype == "history"))
{
	pagetype = "other";
}

function makeReviews(max)
{
	let input = reviews
	input.reverse();
	let output = "";
	for (i = 0; i < input.length && (i < max || max < 0); i++)
	{
		output += `<div class="review"><p class="reviewText">${input[i].review}<br><span class="tab">~ ${input[i].attribution}</span></p></div>`;
	}
	return output;
}

function makeHistory(max)
{
	let input = version_history
	input.reverse();
	let output = ``;
	for (i = 0; i < input.length && (i < max || max < 0); i++)
	{
		output += `
		<h2 style="display:inline;"><a href="${input[i].download}">${input[i].version}</a></h2>` //<p style="display:inline;">${input[i].comment}</p>
		output += `<ul class="changelog">`
		for (j = 0; j < input[i].changelog.length; j++)
		{
			output += `<li>${input[i].changelog[j]}</li>`;
		}
		
		output += `</ul>`;
	}
	return output;
}

let reviews_display = "";
let history_display = "";


if (pagetype == "reviews")
{
	reviews_display = makeReviews(-1);
	document.getElementById('leave_review').innerHTML = `<h2 class="centerreg"><a href="${reviewurl}" target="_blank">Leave A Review</a></h2>`;
	
}
else if (pagetype == "history")
{
	history_display = makeHistory(-1);
}
else
{
	reviews_display += makeReviews(5);
	reviews_display += `<h2 class="centerreg"><a href="${reviewurl}" target="_blank">Leave A Review</a> | <a href="reviews/${pagename}">See All Reviews (${reviews.length})</a></h2>`;
	
	history_display += makeHistory(3);
	history_display += `<h2 class="centerreg"><a href="history/${pagename}">View Full History (${version_history.length})</a></h2>`;
}

if (pagetype != "history")
{
	document.getElementById('reviews').innerHTML = reviews_display;
}
if (pagetype != "reviews")
{
	document.getElementById('history').innerHTML = history_display;
}