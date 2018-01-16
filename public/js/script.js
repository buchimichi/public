$(function () {
    
    $(".slide1").slick({
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        fade: true
    });

    //    ---------------gnavトグル--------------------
    $(".menu").click(function () {
        $(".menu1").toggleClass("menuclick1");
        $(".gnav-sp a").stop().fadeToggle(500);
    });
    $(".menu").click(function () {
        $(".menu2").toggleClass("menuclick2");
        //        $(".gnav-sp").stop().fadeToggle(500);
    })
    $(".menu").click(function () {
        $(".menu3").toggleClass("menuclick3");
        //        $(".gnav-sp").stop().fadeToggle(500);
    });


    //------------------aboutビューアー-------------------   
    $(".about-right a").click(function () {
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
        if (600 <= $(window).scrollTop()) {
            $(".gnav-pc").addClass("sticky");
        } else {
            $(".gnav-pc").removeClass("sticky");
        }
    })
    //    -------------------スムーススクロール------
    $(".gnav-sp a").click(function () {
        var $this = $(this).attr("href");

        var target = $($this).offset().top;
        $("html,body").animate({
            scrollTop: target - 10
        }, 1000);
        return false;
    })

    $(".gnav-pc a").click(function () {
        var $this = $(this).attr("href");

        var target = $($this).offset().top;
        $("html,body").animate({
            scrollTop: target - 10
        }, 1000);
        return false;
    })
    //    ------------------フィルタリング------------
    $("button").click(function () {
        var target = $(this).attr("value");

        $(".work-listimg li").each(function () {

            $(this).animate({
                "opacity": 0
            }, 300, function () {
                $(this).hide();


                if ($(this).hasClass(target) || target == "all") {

                    $(this).show();
                    $(this).animate({
                        "opacity": 1
                    }, 300);
                }
            });
        });
    });
//    -----------------------------キャプションーーーーーーーーーーーーーーー
    $("#work a").hover(function () {
//        $(this).children("img").attr("alt");
        $(this).append("<div class='caption'><p>" +
            $(this).children("img").attr("alt") + "</p></div>");

        $(this).children(".caption").stop().fadeIn(300);

        $(this).children(".caption").children("p").animate({
            "top": "0"
        }, 300);
    }, function () {
        $(this).children(".caption").stop().fadeOut(300);

        $(this).children(".caption").children("p").animate({
            "top": "10px"
        }, 300, function () {
            $(this).parent(".caption").remove();
        });

        return false;
    });
});
