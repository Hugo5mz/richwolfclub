// HEADER ANIMATION

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountain_1');
let mountains_front = document.getElementById('mountain_2');

window.addEventListener('scroll', function(){ 
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 0.95 + 'px';
  mountain_1.style.top = value * 0.5 + 'px';
  mountain_2.style.top = value * 0 + 'px';
  


})

  
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});
