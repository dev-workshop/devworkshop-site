(function ( $ ) {
	$.fn.idioms = function() {
		var idioms = [
			{
				"quote": "Today is the first day of the rest of your life.",
				"author": "Charles Dederich"
			},
			{
				"quote": "In times of change learners inherit the earth; while the learned find themselves beautifully equipped to deal with a world that no longer exists.",
				"author": "Eric Hoffer"
			},
			{
				"quote": "I have no special talent. I am only passionately curious.",
				"author": "Albert Einstein"
			},
			{
				"quote": "Strive not to be a success, but rather to be of value.",
				"author": "Albert Einstein"
			},
			{
				"quote": "Anyone who has never made a mistake has never tried anything new.",
				"author": "Albert Einstein"
			},
			{
				"quote": "Weakness of attitude becomes weakness of character.",
				"author": "Albert Einstein"
			},
			{
				"quote": "I have no special talent. I am only passionately curious.",
				"author": "Albert Einstein"
			},
			{
				"quote": "We cannot solve our problems with the same thinking we used when we created them.",
				"author": "Albert Einstein"
			},
			{
				"quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
				"author": "Albert Einstein"
			},
			{
				"quote": "Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.",
				"author": "Albert Einstein"
			},
			{
				"quote": "The future belongs to those who prepare for it today.",
				"author": "Malcolm X"
			},
			{
				"quote": "A year from now, you'll wish you had started today.",
				"author": "Karen Lamb"
			},
			{
				"quote": "Have Less. Do more. Be more.",
				"author": ""
			},
			{
				"quote": "The future belongs to the few of us still willing to get our hands dirty.",
				"author": ""
			},
			{
				"quote": "You can't stop the waves, but you can learn to surf.",
				"author": ""
			},
			{
				"quote": "I'm not telling you it's going to be easy, I'm telling you it's going to be worth it.",
				"author": ""
			},
			{
				"quote": "Be so good they can't ignore you.",
				"author": "Steve Martin"
			},
			{
				"quote": "If your dreams don't scare you, they're not big enough.",
				"author": ""
			},
			{
				"quote": "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy",
				"author": ""
			},
			{
				"quote": "You've got what it takes, but it will take everything you've got.",
				"author": ""
			},
			{
				"quote": "If you do not step forward, you will always be in the same place",
				"author": ""
			},
			{
				"quote": "Read books. Care about things. Get excited. Try not to be too down on yourself. Enjoy the ever present game of knowing.",
				"author": "Hank Green"
			},
			{
				"quote": "Collect moments, not things.",
				"author": ""
			},
			{
				"quote": "Never stop exploring.",
				"author": ""
			},
			{
				"quote": "Our lives are defined by opportunities. Even the ones we miss.",
				"author": "F. Scott Fitzgerald"
			},
			{
				"quote": "Make yourself proud.",
				"author": ""
			},
			{
				"quote": "Success is the sum of small efforts, repeated day in and day out.",
				"author": "R. Collier."
			},
			{
				"quote": "In the midst of winter, I found there was, within me, an invincible summer.",
				"author": "Albert Camus"
			},
			{
				"quote": "May the dreams of your past be the reality of your future.",
				"author": ""
			},
			{
				"quote": "Never stop learning",
				"author": ""
			},
			{
				"quote": "Now or never.",
				"author": ""
			},
			{
				"quote": "Do things with passion, or not at all. Wherever you go, go with all your heart.",
				"author": ""
			},
			{
				"quote": "Stop waiting for things to happen. Go out and make them happen.",
				"author": ""
			},
			{
				"quote": "Believe in yourself.",
				"author": ""
			},
			{
				"quote": "What we do for ourselves dies with us. What we do for others and the world remains & is immortal.",
				"author": "Albert Pine"
			},
			{
				"quote": "Be brave.",
				"author": ""
			}
		];

		var selected = idioms[$.getRandomInt(0, (idioms.length-1))];

		if (selected.author !== '') {
			selected.author = ' - ' + selected.author;
		}

		this.html(selected.quote+selected.author);

		return this;
	};

	$.getRandomInt = function( min, max ) {
		return Math.round(Math.random() * (max - min)) + min;
	};

}( jQuery ));