$("#toHome").on("click", function () {
    $(this).addClass("active");
    $("#toAboutMe").removeClass("active")
    $("#toProjects").removeClass("active")
    $("html, body").animate({
        scrollTop: $("#home").offset().top - 100,
    }, 500);
})
$("#toAboutMe").on("click", function () {
    $(this).addClass("active");
    $("#toHome").removeClass("active")
    $("#toProjects").removeClass("active")
    $("html, body").animate({
        scrollTop: $("#about-me").offset().top - 100,
    }, 500);
})
$("#toProjects").on("click", function () {
    $(this).addClass("active");
    $("#toHome").removeClass("active")
    $("#toAboutMe").removeClass("active")
    $("html, body").animate({
        scrollTop: $("#projects").offset().top - 100,
    }, 500);
})

// Tonavbar button
$("#toNavbar").on("click", function () {
    $("html, body").animate({
        scrollTop: $("#navbar").offset().top
    })
})