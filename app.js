$(document).ready(function(){
	function card (question, answer){
		this.question = question;
		this.answer = answer;
	}
	
	function next (){
		counter++;
		if (counter > deck.length - 1)
			counter = deck.length - 1;
		return deck[counter].question;
	}
	
	function answer(){
		return deck[counter].answer;
	}
	
	function prev(){
		counter--;
		if (counter < 0)
			counter = 0;
		return deck[counter].question;
	}
	var xyz = "hello";
	var counter = -1;
	
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
	
	$('button[name=next]').click(function(){
		$('#card').html(next());
	});
	
	$('button[name=prev]').click(function(){
		$('#card').html(prev());
	});
		
	$('button[name=answer]').click(function(){
		$('#card').html(answer());
	});
});
