// To add Active Class to the tabs Div to Navigate between tabs topics
$(".section-two .tabs a").click(function(){
    $(this).addClass('active').siblings("a").removeClass('active');
    $(".tabsTopics div.row").hide();
    $("."  + $(this).data('class')).fadeIn();
});

$("button.navbar-toggler").click(function(){
    $("header").css("display", "block");
    $("div.collapse").css("display", "none");
});

$("header i.fa-times").click(function(){
    $("header").css("display", "none");
    // $("header").toggleClass("fadeOutRight");
});

$("header a").click(function(){
    $("header").css("display", "none");
});

// To add Selected Class to the tabs Div to Navigate between tabs topics
$(".section-four div.questions .question p").click(function(){
    $(this).next().fadeToggle();
    $(this).children('i').toggleClass("fa-chevron-up");
});


var $window = $(window);

function resize() {
    if ($window.width() <= 990) {
        return $(".section-one .row").addClass('d-flex flex-column-reverse');
    }

    else{
        return $(".section-one .row").removeClass('d-flex flex-column-reverse');
    }
}
$window.resize(resize).trigger('resize');