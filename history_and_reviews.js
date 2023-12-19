//Determine what type we're looking at
let temp = location.pathname;
temp = temp.split("/");
let pagetype = temp[temp.length - 2];
if (!(pagetype == "reviews" || pagetype == "history"))
{
	pagetype = "other";
}

function makeReviews(max)
{
	let input = reviews
	input.reverse();
	let output = "";
	for (i = 0 ; i < input.length && (i < max || max < 0); i++)
	{
		output += `<p>${input[i]}</p>`;
	}
	return output;
}

function makeHistory(max)
{
	let input = version_history
	input.reverse();
	let output = `<p>Click the version number to download!</p>`;
	for (i = 0 ; i < input.length && (i < max || max < 0); i++)
	{
		output += `
		<h2 style="display:inline;"><a href="${input[i].download}">${input[i].version}</a></h2> <p style="display:inline;">${input[i].comment}</p>
		<br>
	`;
	}
	return output;
}

let reviews_display = "";
let history_display = "";


if (pagetype == "reviews")
{
	reviews_display = makeReviews(-1);
	document.getElementById('leave_review').innerHTML = `<h2 style="text-align:center"><a href="${reviewurl}">Leave A Review</a></h2>`;
	
}
else if (pagetype == "history")
{
	history_display = makeHistory(-1);
}
else
{
	reviews_display += makeReviews(5);
	reviews_display += `<h2 style="text-align:center"><a href="${reviewurl}">Leave A Review</a> | <a href="reviews/i_often_dream_of_marigolds.html">See All Reviews (${reviews.length})</a></h2>`;
	
	history_display += makeHistory(5);
	history_display += `<h2 style="text-align:center"><a href="history/i_often_dream_of_marigolds.html">View Full History (${version_history.length})</a></h2>`;
}

if (pagetype != "history")
{
	document.getElementById('reviews').innerHTML = reviews_display;
}
if (pagetype != "reviews")
{
	document.getElementById('history').innerHTML = history_display;
}