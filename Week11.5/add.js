/* detect user input */
$('#add').click(function () {
	var title = $('#title')[0].value;
	var page = $('#page')[0].value;
	update(title[0].value, page[0].value);
});

/*save input to local storage */
var update = function (title, page) {
	if (title.length > 0 && page.length > 0) {
		var books = [];
		if (localStorage.books) {
			books = JSON.parse(localStorage.books);
		}
		books.push({
			title: title,
			page: page
		});
		localStorage.books = JSON.stringify(books);
	} else {
		$('#container').append($('<p>').text("Please add information before submitting."));
	}
	window.location = "index.html";
}
