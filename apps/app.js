$(document).ready(function(){
/*Takes user input and executes request on button submit*/
	$('#search-term').submit(function(event){
		var searchTerm = $("#form").val();
		event.preventDefault();
		getRequest(searchTerm);
	});

/*Gets data from API*/
	function getRequest(searchTerm){
		var params = {
			q: searchTerm, /*user input*/
			part: "snippet",
			key: "AIzaSyCvfUZiVVt_znAtCPkq7pM3xNLDW1GPr5Y"
		};
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data){
	  		showResults(data.items); //search vs items??
	  		});
	}

/*Displays results on page and in console*/
	function showResults(results) {
		var html= "";
		$.each(results, function(index, video){
			html += "<img src='" + video.snippet.thumbnails.medium.url + "'/>";
			console.log(video.snippet.thumbnails.medium.url);
		});
	$('#search-results').html(html);
	}

})



