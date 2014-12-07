(function ( $ ) {
	$.fn.timeline = function(options) {
		var defaults = {
			deadlines: [
				{
					"name": "Earlybird",
					"price": 40,
					"date": "December 12th 2014"
				},
				{
					"name": "Normal",
					"price": 50,
					"date": "January 31th 2015"
				},
				{
					"name": "Latebird",
					"price": 60,
					"date": "February 13th 2015"
				}
			]
		};

		var options = $.extend({}, defaults, options);

		// current-date
		var curDate = new Date();

		// find next deadline
		// for (i in deadlines){
		// 	if (typeof deadlines[i] != 'function'){
		// 		var deadline = deadlines[i];
		// 		var deadline.date = new Date(deadline.date);

		// 		if (deadline.date < curDate){
		// 			// find percentage of time remaining
		// 			// set width
		// 			// black out 
					
		// 		}

		// 		// set current price
		// 		// percent through current deadline
				
		// 	}
		// }

		// var selected = idioms[$.getRandomInt(0, (idioms.length-1))];

		// if (selected.author !== '') {
		// 	selected.author = ' - ' + selected.author;
		// }

		// this.html(selected.quote+selected.author);

		return this;
	};

	// $.getRandomInt = function( min, max ) {
	// 	return Math.round(Math.random() * (max - min)) + min;
	// };

}( jQuery ));