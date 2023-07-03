$(function(){
    $("nav a").click(function(){
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    //置頂按鈕  -----------------------------------------------
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    //淡入淡出  -----------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){ 
            $("#gotop").stop().fadeTo("slow",0.7); 
        } else {
            $("#gotop").stop().fadeOut("slow");
        }
    }); 


    //滑到的時候才出來  -----------------------------------------------
    $('.box').smoove({
        offset:'10%',
    });


    /*  -------------------------- 關於我們 */
    $('.about_ma').smoove({
        offset: '50%',
    });

    $('.about_bg01').smoove({
        offset: '30%',
    });

    $('.about_bg02').smoove({
        offset: '30%',
    });

    /*  -------------------------- 最新消息 */

    $('.news_jin').smoove({
        offset: '30%',
    });

    $('.product_img').smoove({
        offset: '30%',
    });

    /*  -------------------------- 湯頭介紹 */

    $('.hotpot01').smoove({
        offset: '70%',
    });

    $('.product_intro_01').smoove({
        offset: '50%',
    });

    $('.hotpot02').smoove({
        offset: '10%',
    });


    /*  -------------------------- 加盟專區 */
    

    $('.partner_form').smoove({
        offset: '30%',
    });

    $('.shop_list').smoove({
        offset: '40%',
    });
    

});