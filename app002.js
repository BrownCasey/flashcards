/***********TO DO ******************* 
*	Let arrows *scroll up down, unless flashcards have focus.
*
*************************************/

$(document).ready(function(){
	
	// define a card object so we can make a flashcard
	function card (question, answer){
		this.question = question;
		this.answer = answer;
	}
	
	// return the next question	in the array
	function next (){
		counter++;
		if (counter > deck.length - 1)
			counter = deck.length - 1;
		return "Q: " + deck[counter].question;
	}
	
	// toggle between question and answer
	function answer(){
		var b = $('#card').text();
		var c = b.charAt(0);
		console.log(b);
		console.log(c);
		// If html is showing a question, return answer
		if (c == "Q")
			return "A: " + deck[counter].answer;
		// Otherwise, return the current question
		else
			return "Q: " + deck[counter].question;
	}
	
	// return the previous question in the array
	function prev(){
		counter--;
		if (counter < 0)
			counter = 0;
		return "Q: " + deck[counter].question;
	}
//	no recollection why this variable is here
//	var xyz = "hello";
	var counter = -1;
	
	// an example Q/A array
	var deck = new Array();
	deck[0] = new card("Alabama", "Montgomery");
	deck[1] = new card("Alaska", "Juneau");
	deck[2] = new card("Arizona", "Phoenix");
	deck[3] = new card("Arkansas", "Little Rock");
	deck[4] = new card("California", "Sacramento");
	deck[5] = new card("Colorado", "Denver");
	deck[6] = new card("Connecticut", "Hartford");
	deck[7] = new card("Delaware", "Dover");
	deck[8] = new card("Florida", "Tallahassee");
	deck[9] = new card("Georgia", "Atlanta");
	deck[10] = new card("Hawaii", "Honolulu");
	deck[11] = new card("Idaho", "Boise");
	deck[12] = new card("Illinois", "Springfield");
	deck[13] = new card("Indiana", "Indianapolis");	
	deck[14] = new card("Iowa", "Des Moines");
	deck[15] = new card("The End!", "Still the end");	
	
	// next button calls next, insert next Q in html
	$('button[name=next]').click(function(){
		$('#card').html(next());
	});
	
	// prev button calls prev, insert prev Q in html
	$('button[name=prev]').click(function(){
		$('#card').html(prev());
	});
	
	// answer/flip button calls answer, toggles Q/A
	$('button[name=answer]').click(function(){
		$('#card').html(answer());
	});

	// Navigate flashcards with arrow keys
	$(document).keyup(function(e){
		console.log(e.keyCode + " " + e.key);
		switch (e.keyCode){
			// on down, next card
			case 40:
				$('#card').html(next());
				break;
			// on right, toggle Q/A
			case 39:
				$('#card').html(answer());
				break;
			// on up, previous card
			case 38:
				$('#card').html(prev());
				break;
			// on left, toggle Q/A
			case 37:
				$('#card').html(answer());
				break;
			// else, break
			default:
				$(document).eatText();
				break;
		}
	});
	
	// stop the arrows from scrolling the window
	$(document).keydown(function(e){
		switch (e.keyCode){
			case 40:
				e.preventDefault();
				break;
			case 39:
				e.preventDefault();
				console.log(userCard);
				break;
			case 38:
				e.preventDefault();
				break;
			case 37:
				console.log(userCard);
				e.preventDefault();
				break;
			default:
				break;
		}
	});
	
	$('#getCSV').click(function(){
		var userCard = $('#textarea').val();
		objIt(parseIt(userCard));
	});
	
	function parseIt(a){
		var userDeck = a.split("\n");
		console.log(userDeck);
		return userDeck;
	}
	
	function objIt(a){
		for (i in a){
			var question = a[i].slice(0, a[i].indexOf("|"));
			var answer = a[i].slice(a[i].indexOf("|") + 1);
		deck2[i] = new card(question, answer);		
		}
		for (i in deck2)
		console.log(deck2[i]);
	}
	
	var deck2 = new Array();
});
