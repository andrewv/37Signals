$(document).ready(function() {
	$('#pbbc').mouseenter(function() {
	$('#maincontainer').find('h1').first().text('Basecamp is the project management tool you wish you had on your last project'); //Replace H1 text
	$('#maincontainer').find('h1').first().toggleClass('jQueryHeadline'); //Make the text smaller
	$('#maincontainer').find('h5').first().text("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way."); //Add other headline
	$('#maincontainer').find('h5').first().toggleClass('jQuerySubHeadline'); //make other headline smaller
	$(this).find('#arrowbc').show();
	
	});
	
	$('#pbhr').mouseenter(function() {
	$('#maincontainer').find('h1').first().text("Highrise remembers the important things about people you'd normally forget"); //Replace H1 text
	$('#maincontainer').find('h1').first().toggleClass('jQueryHeadline'); //Make the text smaller
	$('#maincontainer').find('h5').first().text("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise."); //Add other headline
	$('#maincontainer').find('h5').first().toggleClass('jQuerySubHeadline'); //make other headline smaller
	$(this).find('#arrowhr').show();
	
	});
	
	$('#pbcf').mouseenter(function() {
	$('#maincontainer').find('h1').first().text("From near or far, Campfire helps teams work together over the web in real-time"); //Replace H1 text
	$('#maincontainer').find('h1').first().toggleClass('jQueryHeadline'); //Make the text smaller
	$('#maincontainer').find('h5').first().text("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire."); //Add other headline
	$('#maincontainer').find('h5').first().toggleClass('jQuerySubHeadline'); //make other headline smaller
	$(this).find('#arrowcf').show();
	
	});
	
	function reset(){
		$('#maincontainer').find('h1').first().text('Making collaboration productive and enjoyable for people every day.');
		$('.arrow').hide();
		$('#maincontainer').find('h5').first().text('Frustration-free web-based apps for collaboration, sharing information, and making decisions.');
		$('#maincontainer').find('h1').first().removeClass('jQueryHeadline');
		$('#maincontainer').find('h5').first().removeClass('jQuerySubHeadline');
		    };
	
	$('#maincontainer').on('mouseleave',reset);
});