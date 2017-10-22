

//on nav clicks, show only relevant elements and adjust
//nav-bar formatting to highlight selected nav tab


//when the listen button is clicked...
$("#my-garden-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".my-garden-page").show();
	$(".my-store-page").hide();
	$(".inventory-page").hide();
	$(".get-seeds-page").hide();
	$(".get-supplies-page").hide();
});


//when the store button is clicked...
$("#my-store-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".my-garden-page").hide();
	$(".my-store-page").show();
	$(".inventory-page").hide();
	$(".get-seeds-page").hide();
	$(".get-supplies-page").hide();
});


//when the news button is clicked...
$("#inventory-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".my-garden-page").hide();
	$(".my-store-page").hide();
	$(".inventory-page").show();
	$(".get-seeds-page").hide();
	$(".get-supplies-page").hide();
});

//when the contact button is clicked...
$("#get-seeds-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".my-garden-page").hide();
	$(".my-store-page").hide();
	$(".inventory-page").hide();
	$(".get-seeds-page").show();
	$(".get-supplies-page").hide();
});

$("#get-supplies-btn").click(function() {

	//remove special formatting from all nav elements again when each button is clicked
	$(".nav-bar li a").removeClass('selected');

	//add special formatting for this nav element
	$(this).addClass('selected');

	//hide any open content from other tabs
	$(".my-garden-page").hide();
	$(".my-store-page").hide();
	$(".inventory-page").hide();
	$(".get-seeds-page").hide();
	$(".get-supplies-page").show();
});









