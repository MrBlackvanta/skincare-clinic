$(function () {
  $(".review-boxx").slick({
    mobileFirst: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// const gallery11 = document.getElementById("hiddenxx1");

// gallery11.style.display = "none";

// setTimeout(() => {
//   gallery11.style.display = "block";
// }, 5000);
