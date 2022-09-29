
  window.console = window.console || function(t) {};



  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }


src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"

src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"
id="rendered-js"
// Smooth Scrolling for internal links
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  var target = this.hash;
  var $target = $(target);

  $("html, body").stop().animate({
    "scrollTop": $target.offset().top },
  900, 'swing', function () {
    window.location.hash = target;
  });
});

// Change background of nav bar on scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > window.innerHeight - 55) {
    $(".navbar").removeClass("transparent");
  } else {
    $(".navbar").addClass("transparent");
  }
});

// Activate scrollspy to highlight nav item when scrolled over
$("body").scrollspy({ target: ".navbar" });

// Bind events to open and close portfolio popups
$(".thumbnail-overlay").on("click", openProject.bind(this));
$(".close-window").on("click", closeWindow.bind(this));

function openProject(event) {
  if ($(event.target).next(".thumbnail-overlay")) {
    var id = "#" + $(event.target).parent().attr("page");
    $(id).fadeIn();
  } else {
    var id = "#" + $(event.target).attr("page");
    $(id).fadeIn();
  }
}

function closeWindow(event) {
  $(event.target).parents(".full-screen").fadeOut();
}
//# sourceURL=pen.js