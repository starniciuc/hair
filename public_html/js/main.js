
$(".show-more").click(function() {
    var mybtn = $(this);
    var par = mybtn.parents(".colect-par").children(".col-sm-11").children(".image").children(".collection-hidden");
	$(mybtn).toggleClass("active");
	par.toggle("fast");

});

$(".show-form-command").click(function(){
    $(".form-commad").toggle();
})