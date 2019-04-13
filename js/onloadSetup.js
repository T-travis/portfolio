// Initialize Side-Nav for mobile
document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".sidenav");
  let instances = M.Sidenav.init(elems);
});


// animates Main section using anime.js
// with the help of http://tobiasahlin.com/moving-letters
function animateHome() {
  // Wrap every letter in a span
  $(".animate .letters").each(function () {
    $(this).html(
      $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime.timeline({
      loop: false
    })
    .add({
      targets: ".animate .letter",
      scale: [0, 1],
      duration: 2000,
      elasticity: 650,
      delay: function (el, i) {
        return 45 * (i + 1);
      }
    });
}

// main
$(window).on('load', function () {

  $(document).ready(function () {
    $('.tooltipped').tooltip();
  });

  setTimeout(function () {
    animateHome();
  }, 1000);

  // ALWAYS start at HOME tab
  $('#HOME').show();
  $('#ABOUTME').hide();
  $('#PROJECTS').hide();
  $('#CONTACTS').hide();

  // show TAB seleced and hide others
  $('.homeTab').on('click', function () {
    $('#ABOUTME').hide();
    $('#PROJECTS').hide();
    $('#CONTACTS').hide();
    $('#HOME').show();
    animateHome();
  });
  // show TAB seleced and hide others
  $('.aboutMeTab').on('click', function () {
    $('#HOME').hide();
    $('#PROJECTS').hide();
    $('#CONTACTS').hide();
    $('#ABOUTME').show();
  });
  // show TAB seleced and hide others
  $('.projectsTab').on('click', function () {
    $('#HOME').hide();
    $('#ABOUTME').hide();
    $('#CONTACTS').hide();
    $('#PROJECTS').show();
  });
  // show TAB seleced and hide others
  $('.contactsTab').on('click', function () {
    $('#HOME').hide();
    $('#ABOUTME').hide();
    $('#PROJECTS').hide();
    $('#CONTACTS').show();
  });

  $('ul.tabs').tabs();


});