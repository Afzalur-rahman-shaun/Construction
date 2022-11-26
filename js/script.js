$(function(){

    // banner slider js

    $('.banner_slider').slick({
        autoplay:true,
        speed:2000,
        arrows:false
    });

    // brand slider js

    $('.brand_logo').slick({
        autoplay:true,
        speed:1500,
        arrows:false,
        slidesToShow:5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    // team slider js

    $('.team_slider').slick({
        autoplay:true,
        speed:2000,
        arrows:true,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow:'<i class="fa-solid fa-arrow-left team_slide team_slide_left"></i>',
        nextArrow:'<i class="fa-solid fa-arrow-right team_slide team_slide_right"></i>',

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          },
        ]
    });


    $(".blog_slider").niceScroll({
      cursorborder:"",
      cursorcolor:"#18A7B9",
      boxzoom:false
    });
})


