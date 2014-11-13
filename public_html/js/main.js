
$(".show-more").click(function() {
    var mybtn = $(this);
    var par = mybtn.parents(".colect-par").children(".col-sm-11").children(".image").children(".collection-hidden");
    $(mybtn).toggleClass("active");
    par.toggle("fast");

});

$(".show-form-command").click(function() {
    $(".form-commad").toggle();
});

$(".show-feedback").click(function() {
    var mybtn = $(this);
    var par = mybtn.parents(".feedback-side").children(".collapse");
    par.collapse("show");
    par.on('shown.bs.collapse', function() {
        mybtn.click(function() {
            par.collapse('hide');
        });
    });
})
$(".show-service").click(function() {
    var mybtn = $(this);
    var par = mybtn.parents(".page-content").children(".collapse");
    par.collapse("show");
    par.on('shown.bs.collapse', function() {
        mybtn.click(function() {
            par.collapse('hide');
        });
    });
})
$(document).ready(function(){
	if($(".slider-left").length > 0){
		$(".slider-left").bxSlider({
			auto: true
		}); 
	}
});
