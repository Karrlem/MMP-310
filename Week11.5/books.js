/* read localStorage*/
if(!localStorage.books){
	$('#contsiner').append(
		$('<p>'.text("No books yet : (")
	)
} else{
		var books = JSON.parse(localStorage.books);
		for (var i =0; i <books.length; i++){
			addBook(books[i]);
		}
	}
}
/* populate HTML data*/
var addBook= function(book){
	var div = $('<div>').addClass('book')
		.append('<h2').text(book.title);
		.append('<input>').attf({
			id:book.title,
			value:book.page
		});
}

/* update page number*/
