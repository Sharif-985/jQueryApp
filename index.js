
$(document).ready(function(){

	// $('button').addClass('animated');
	// $('#target2').removeClass('btn-primary');
	// $('#target2').css({backgroundColor: 'black', color: 'white'});
	// $('#target4').prop('disabled', true);
	// $('.hText').html('Learning <b>jQuery</b> with lots of fun!');

	//button move one column to another 
	//$('#target4').appendTo('.left');

	//clone all to another
	//$('.left').clone().appendTo('.right');

	//target parant element
	// $('.headingLeft').parent().css('backgroundColor', 'red');
	// $('.right').children().css('color', 'red');

	//target odd & even
	// $('button:odd').addClass('fadeInRight');
	// $('button:even').addClass('fadeInLeft');

	//click button for action
	// $('.qustion').on('click', function(){
	// 	$('.text').html('jQuery is popular web development tool!');
	// })



	//call a api with JSON
	// var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
	// $.getJSON(url, function(data){
	// 	var allNews = data.hits;
	// 	// console.log(allNews);
	// 	var eachNews = '';
	// 	allNews.map(function(item, index, array){
	// 		$('.qustion').on('click', function(){
	// 			eachNews += "<div>";
	// 			eachNews += item.title;
	// 			eachNews += "</div>";
	// 			$('.text').html(eachNews);
	// 		})
	// 	})
	// })


	//GeoLocation search
	// if(navigator.geolocation){
	// 	navigator.geolocation.getCurrentPosition(function(position){
	// 		$('.text').html('Latitude : '+ position.coords.latitude + '<br/>' + 'Longitude : '+ position.coords.longitude);
	// 	})
	// }

	//tweet app & data random generate from api
	var link = 'https://hn.algolia.com/api/v1/search?query=javascript';
	$.getJSON(link, function(data){
		var cData = '';
		var quote = data.hits;

		$('.seeMore').on('click', function(){
			cData = quote[Math.floor(Math.random() * quote.length)];
			$('.tweethead').hide();
			$('.NewsLink').html(cData.title);
			$('.NewsLink').attr('href', cData.url).attr('target', '_blank');
			$('.quoteAuthor').html(cData.author);

			$('.tweetInfo').attr('href', 'https://twitter.com/intent/tweet?text= ' + cData.title + ' - ' + cData.author).attr('target', '_blank').removeClass('disabled');
			$('.seeMore').html('Once more..');
		})
	})
	


	


	
});