//
// // Check screen size (at the begining)
// if ($(window).width() <= 791) {
//   $(".navbar").attr("dir", "rtl");
// } else {
//   $(".navbar").attr("dir", "ltr");
// }
//
// // Screen resizing
// $(window).resize(function() {
//   if ($(window).width() <= 791) {
//     $(".navbar").attr("dir", "rtl");
//   } else {
//     $(".navbar").attr("dir", "ltr");
//   }
// });

// Statistics counting animation
var counterFirstTime = true;
$(document).on('scroll', function() {
  if (counterFirstTime) {
    counterFirstTime = false;
    $('.statistic-count').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 5000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
});
