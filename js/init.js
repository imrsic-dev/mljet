
    //initialize video player, video.js
    let player = videojs("video-mljet", {
        fill: true
    });

    //initialize carousel, slick
    $('.carousel').slick({
        variableWidth: true,
        variableHeight: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        arrows: false,
        dots: true,
        appendDots: '#mainSlider__dots1',
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


