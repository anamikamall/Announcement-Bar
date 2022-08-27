$('.flash-infos').slick({
      dots: false,
      infinite: true,
      speed: 300,        
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [          
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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