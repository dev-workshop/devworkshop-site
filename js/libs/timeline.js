(function ( $ ) {
	$.fn.timeline = function(options) {
		var defaults = {
			start: "November 16 2014",
			end: "February 13 2015",
			deadlines: [
				{
					"name": "Earlybird",
					"price": 40,
					"startDate": "November 16 2014",
					"color": "success",
					"duration": {},
					"percent": 0
				},
				{
					"name": "Normal",
					"price": 50,
					"startDate": "December 16 2014",
					"color": "warning",
					"duration": {},
					"percent": 0
				},
				{
					"name": "Latebird",
					"price": 60,
					"startDate": "January 30 2015",
					"color": "danger",
					"duration": {},
					"percent": 0
				}
			]
		};
		var options = $.extend({}, defaults, options);
		var now = new Date();
		var start = new Date(options.start);
		var end = new Date(options.end);
		var duration = end - start;
		var sumPercent = 0;

		// step through all the deadlines
		for (var i = 0; i <= options.deadlines.length - 1; i++) {
			var curStartDate = new Date(options.deadlines[i].startDate);
			
			if (i == 0) {
				// first
				options.deadlines[i].duration = new Date(options.deadlines[i+1].startDate) - start;
			} else if (i == options.deadlines.length - 1) {
				// last
				options.deadlines[i].duration = end - curStartDate;
			} else {
				// middle
				var nextStartDate = new Date(options.deadlines[i+1].startDate);
				options.deadlines[i].duration = nextStartDate - curStartDate;
			}
			
			// if the last figure comes out above 100, just make it the remainder
			var percent = Math.round((options.deadlines[i].duration / duration) * 100);
			options.deadlines[i].percent = ((sumPercent+percent)>100) ? (100 - sumPercent) : percent;
			sumPercent += percent;
		}

		console.log(options.deadlines);

		// set `expire` class on if past	
		// find percentage of time remaining
		// set width
		// black out

		// set current price
		// percent through current deadline

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