function remove_extra_feed()
{ 
	var extra_stuff = document.getElementsByClassName('border rounded-1 p-3 my-2');
	no_of_posts = extra_stuff.length; 
	for (var i = 0; i < no_of_posts; i++) {

		extra_stuff[0].remove();

	}
};

document.getElementsByClassName('ajax-pagination-btn')[0].onclick = function()
{
	remove_extra_feed();
}