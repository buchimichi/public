$(function () {


    //    ---------------gnavトグル--------------------
    $(".menu").click(function () {
        $(".menu1").toggleClass("menuclick1");
        $(".gnav-sp").stop().fadeToggle(500);
    });
    $(".menu").click(function () {
        $(".menu2").toggleClass("menuclick2");
        $(".gnav-sp").stop().fadeToggle(500);
    })
    $(".menu").click(function () {
        $(".menu3").toggleClass("menuclick3");
        $(".gnav-sp").stop().fadeToggle(500);
    });


    //------------------aboutビューアー-------------------   
    $(".about a").click(function () {
        $("figure img").attr("src", $(this).attr("href"));
        return false;
    })




    //    --------------------pagetop--------------
    $(".page-top").click(function () {
        $("html,body").animate({
            scrollTop: "0"
        }, 1000);
        return false;
    })
    $gnavPos = $(".gnav-pc").offset().top;
    $(window).scroll(function () {
        $(window).scrollTop();
        if ($(window).scrollTop() >= 500) {
            $(".page-top").fadeIn();
        } else {
            $(".page-top").fadeOut();
        }

//    -----------------nav-sticky-------------
        if ($gnavPos <= $(window).scrollTop()) {
            $(".gnav-pc").addClass("sticky");
        } else {
            $(".gnav-pc").removeClass("sticky");
        }
    })
//    -------------------スムーススクロール------
    $(".gnav-pc a").click(function(){
        var $this = $(this).attr("href");
        
        var target = $($this).offset().top;
        $("html,body").animate({
            scrollTop: target - 10
        }, 1000);
        return false;
    })
    
});
