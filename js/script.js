// script for index.html

$(document).ready(function () {
  var owl = $(".owl1");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".ccustomNextBtn").click(function () {
    owl.trigger("next.owl.carousel", [300]);
  });

  $(".customPrevBtn").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
    console.log("hello");
  });
});
