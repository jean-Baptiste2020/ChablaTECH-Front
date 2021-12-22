
let buttonenabled = true, scroll = 0;
$(document).on("click", ".darkmode", function () {
	if (!buttonenabled) return;
	buttonenabled = false;
	$(".clip").html($("body >.cont")[0].outerHTML); //Copy cont to inside clip
	scrollbind($(".clip .cont"));
	$(".clip .cont").toggleClass("dark").scrollTop(scroll); //Toggle dark mode and set scroll
	$(".clip .darkmode").toggleClass("fa-moon").toggleClass("fa-sun"); //Make changes: change button icon
	$(".clip").addClass("anim"); //Animate the clip
	setTimeout(function () {
		$("body >.cont").replaceWith($(".clip").html()) //Replace cont with clip html
		scrollbind($("body >.cont")); //bind scroll with new cont
		$("body >.cont").scrollTop(scroll); //Set scroll position
		$(".clip").html("").removeClass("anim"); //Hide clip
		buttonenabled = true;
	}, 1000); //Slightly before animation finishes but when the circle will have covered the screen, gives us 500ms to make the changes we need which is plenty. Slower computers will not see a flash, but elements may not have loaded - if it really is an issue delay line 19 a little
});

const scrollbind = el => el.bind("scroll", function () {
	scroll = $(this).scrollTop();
	if ($(".cont").length > 1) //No point setting it if there is only 1
		$(".cont").scrollTop(scroll);
	//This will set the scroll position of the cont inside the clip so it scrolls while the animation is being carried out
});
scrollbind($(".cont"));