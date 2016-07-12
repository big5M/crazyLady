$(function() {

    // 两个大图滚动
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      loop : true,
    });
    var swiper2 = new Swiper('.coffee-container', {
      pagination: '.coffee-pagination',
      paginationClickable: '.coffee-pagination',
      nextButton: '.coffee-button-next',
      prevButton: '.coffee-button-prev',
      spaceBetween: 30,
      loop : true,
      autoHeight:true,
      autoplay: 5000,
      autoplayDisableOnInteraction: true,

    });

    var carousel = $('#skyclass').carousel({
			itemWidth: 315,
			itemHeight: 324,
			distance: 50,
			selectedItemDistance: 50,
            navigationButtonsVisible:true,
            selectByClick:true,
		});

		// Select the 2nd item with 4 second selection animation
		carousel.select(2, 4);

		// Select the next item with no animation
		carousel.selectNext(0);
		carousel.startAutoSlideshow();

		// Stop auto slideshow
		carousel.stopAutoSlideshow();
        $(".sky-carousel-container li").eq(3).children().show();
        $(".sky-carousel-container li").css("margin-top","70px");
        $(".sky-carousel-container li").eq(3).css("margin-top","0");
        $(".sky-carousel-container li>span").css("display","inline-block");
        carousel.on('itemSelected.sc', function(evt) {
            $(".sky-carousel-container li>h2").hide();
            $(".sky-carousel-container li>span").hide();
            $(".sky-carousel-container li")
            $(".sky-carousel-container li").css({
                "margin-top":"70px",
            });
            $(".sky-carousel-container li").eq(evt.item.index()).css({
                "margin-top":"0",
            });
            $(".sky-carousel-container li").eq(evt.item.index()).children().show()
		});

    //鼠标悬停   大图滚动停止
    $(".coffee-container ").hover(function() {
        swiper2.stopAutoplay();
    },function() {
        swiper2.startAutoplay();
    })
    //咖啡hover效果
    $(".img-top").hover(function() {
        if ($(window).width()>=768) {
            $(this).parent().next().show();
            $(this).parent().next().next().next().show();
        }
    },function() {
        if ($(window).width()>=768) {
            $(this).parent().next().hide();
            $(this).parent().next().next().next().hide();
        }
    });
    $(".img-bottom").hover(function() {
        if ($(window).width()>=768) {
            $(this).parent().next().next().show();
        }
    },function() {
        if ($(window).width()>=768) {
            $(this).parent().next().next().hide();
        }
    });
    //窗口改变时,轮播图下面的介绍
    $(window).resize(function() {
        if ($(window).width()<768) {
            $('.textcontent').show();
            $('.textcontent h5').show();
        }else {
            $('.textcontent').hide();
            $('.textcontent h5').hide();
        }
    });
    //-------
    $(".w").hover(function() {

        $(".w .hovershow p").eq($(this).parent().index()).show();
        $(".w .hovershow p").eq($(this).parent().index()).css({
            "padding":"5px auto"
        });
        $(".w .hovershow").eq($(this).parent().index()).css("height","100%")
        $(".w .hovershow h3").eq($(this).parent().index()).css({
            "margin-top":"70px",
        })
    },function() {
        $(".w .hovershow p").eq($(this).parent().index()).hide();
        $(".w .hovershow").eq($(this).parent().index()).css("height","52px")
        $(".w .hovershow h3").eq($(this).parent().index()).css({
            "margin-top":"15px",
        })
    })

    //ditu
    $(".city").on("click",function() {
        $(".city-info").toggleClass("none");
    })
    $(".city-info ul li").on("click",function() {
        console.log($(this));
        var x =$(this).attr("data-storex");
        var y = $(this).attr("data-storey");
        var namess = $(this).html();
        $("#map").empty();
        $("#map").height($("#map").width()/3)
        var map = new BMap.Map("map");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(x,y), 17);  // 初始化地图,设置中心点坐标和地图级别
        var marker1 = new BMap.Marker(new BMap.Point(x,y),17);  // 创建标注
        map.addOverlay(marker1);
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity(namess);
    });

        window.onscroll = function(){
            if (document.body.scrollTop>50) {
                $(".returnTop").show()
            }else{
                $(".returnTop").hide()
            }
        }
        var timer;
        $(".returnTop").on("click",function() {
            var start = document.body.scrollTop;
		    var end = 0;
		    var change = end- start;
		    var step = 0;
		    var maxStep = 30;
		    if (timer) {
		    	     clearInterval(timer);
		    }
		    timer = setInterval(function(){
		    	step++;
		    	if (step==maxStep) {
		    		clearInterval(timer);
		    	}
            document.body.scrollTop = start + change/maxStep*step ;
		    },16)

        })
})
