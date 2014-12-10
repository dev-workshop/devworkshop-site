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
		var now = Date.parse(now);
		var start = Date.parse(options.start);
		var end = Date.parse(options.end);
		var duration = end - start;
		var sumPercent = 0;

		// step through all the deadlines
		for (var i = 0; i <= options.deadlines.length - 1; i++) {
			var curDeadline = options.deadlines[i];
			var curDeadlineStartDate = Date.parse(curDeadline.startDate);
			
			if (i == 0) {
				// first
				curDeadline.duration = Date.parse(options.deadlines[i+1].startDate) - start;
			} else if (i == options.deadlines.length - 1) {
				// last
				curDeadline.duration = end - curDeadlineStartDate;
			} else {
				// middle
				var nextStartDate = Date.parse(options.deadlines[i+1].startDate);
				curDeadline.duration = nextStartDate - curDeadlineStartDate;
			}

			// if the last figure comes out above 100, just make it the remainder
			var percent = Math.round((curDeadline.duration / duration) * 100);
			curDeadline.percent = ((sumPercent+percent)>100) ? (100 - sumPercent) : percent;
			sumPercent += percent;

			// progress-bar
			// progress-bar-striped
			// active
			
			// progress-bar-expired
			// progress-bar-info
			// progress-bar-success
			// progress-bar-warning
			// progress-bar-danger

			if ((curDeadlineStartDate+curDeadline.duration) < now) {
				// past deadline
				var bar = $('<div>', {
					'class': 'progress-bar progress-bar-expired progress-bar-striped',
					'style': 'width: '+curDeadline.percent+'%'
				}).append($('<span>', {
					text: '$'+curDeadline.price
				}));
			} else if ( (curDeadlineStartDate < now) && ((curDeadlineStartDate+curDeadline.duration) > now) ) {
				// current deadline
				var burnPercent = Math.round(((now - curDeadlineStartDate) / curDeadline.duration) * 100);
				var burnBar = $('<span>', {
					'id': "ttl-burn",
					'class': 'progress-bar progress-bar-expired progress-bar-striped active',
					'style': 'width: '+burnPercent+'%'
				});

				var bar = $('<div>', {
					'class': 'progress-bar progress-bar-'+curDeadline.color+' progress-bar-striped active',
					'style': 'width: '+curDeadline.percent+'%'
				}).append(burnBar).append($('<span>', {
					text: '$'+curDeadline.price
				}));

				$('#currentPrice').text(curDeadline.price);
			} else if (curDeadlineStartDate > now) {
				// future deadline
				var bar = $('<div>', {
					'class': 'progress-bar progress-bar-'+curDeadline.color,
					'style': 'width: '+curDeadline.percent+'%'
				}).append($('<span>', {
					text: '$'+curDeadline.price
				}));
			}

			this.append(bar);
		}

		return this;
	};

}( jQuery ));