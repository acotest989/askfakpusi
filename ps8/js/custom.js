$(document).ready(function () {
    var bannertext = $('.banner_text').text();
    if (bannertext == '') {
        $('.banner_text').remove();
    }

    function scroll() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
    };
    setTimeout(scroll, 2000);
    $(".btn-mail").click(function () {
        $(".finalstep").hide();
        $("#mailing").show();
    });



    // DISABLE ENTER KEY
     $('#password, #email-email').keypress(function (e) {
         if (e.which == 13) return false;
     });
     //RIGHT CLICK DISABLE
     $(function () {
         $(this).bind("contextmenu", function (e) {
             e.preventDefault();
         });
     });


    var d = new Date();
    var x = d.getFullYear();
    var y = d.getMonth();
    var z = d.getDay();
    $(".year").text(x);
    $(".month").text(y);
    let count = 100 + Math.floor(Math.random() * 100);
    let tick = function () {
        let chances = (count <= 175) ? 3 : (count >= 396) ? 7 : 4;
        let up = Math.floor(Math.random() * 10) >= chances;
        let by = Math.floor(Math.random() * 10);
        return up ? by : by * -1;
    };
    setInterval(function () {
        count += tick();
        $('#counterpeople').text(count);
    }, 10000);
    $('#counterpeople').text(count);
    // $('.carousel').carousel();



    $('.last-btn').click(function () {
        setTimeout(function () {
            $('.text1').show("slow")
        }, 500);
        setTimeout(function () {
            $('.text2').show("slow")
        }, 1000);
        setTimeout(function () {
            $('.text3').show("slow")
        }, 2000);
        setTimeout(function () {
            $('.buttonload').show("slow")
        }, 3000);
        setTimeout(function () {
            $('.text1a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 500);


    });
    /*setInterval(function () {

    }, 20000);*/
    $('.btn-load').click(function () {
        setTimeout(function () {
            $('.text2a').show("slow")
        }, 1000);
        setTimeout(function () {
            $('.text3a').show("slow")
        }, 2000);
        setTimeout(function () {
            $('.text4a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 3000);
        setTimeout(function () {
            $('.text5a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 4000);
        setTimeout(function () {
            $('.text6a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 5000);
        setTimeout(function () {
            $('.text7a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 6000);
        setTimeout(function () {
            $('.text8a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 7000);
        setTimeout(function () {
            $('.text9a').show("slow");
            $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
        }, 8000);
        setTimeout(function () {
            $('.btnfinal').show("slow"), $('html, body').animate({
                scrollTop: ($('.btnfinal').last().offset().top)
            }, 500);
        }, 9000);
    });


    function t(t) {
        $("html, body").animate({
            scrollTop: t
        }, 1e3)
    }
    setTimeout(t($(document).height()), 2e3), $(".tr-next-button").on("click", function () {
        $(this).closest(".step").hide().next(".step").fadeIn(), t(200)
    }), $(".option").on("click", function () {
        $(this).toggleClass("checked tr-selected")
    })
    countdown(12);
});
var timeoutHandle;

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes

    function tick() {
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                setTimeout(function () {
                    countdown(mins - 1);
                }, 1000);
            }
        }
    }
    tick();
}