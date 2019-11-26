$(document).ready(function () {

$('.btn_nav').click(function() {
  // animate content
  //based on https://codepen.io/MergimUjkani/pen/QbdvxL
//  $('.page__style').addClass('animate_content');
//can i just use the section tag or do I need a class name?
//  $('section').addClass('animate_content');
  $('.page_style').addClass('animate_content');
  //class row will fade out section 1 but section 4 still doesn't appear
  //removing fadeIn keeps button from reappearing.
  //try changing the color. Section 4 not showing but is called
  //follwing  not doinganything ...all done in animate_content...does fade out row and button
  //$('.row').fadeOut(100).delay(2800);
  console.log("animate content");


  //remove fadeIn class after 1500ms



});

// on click show page after 1500ms


$('.projects_link').click(function() {
  setTimeout(function() {
  //  $('#section-4').addClass('fadeIn');
  $('#section-1').hide(); //hides 1 and shows 2
  $('#section-4').show();
  }, 1500);
  console.log("in section4");

});

$('.skills_link').click(function() {
  setTimeout(function() {
    $('.skills').addClass('fadeIn');
  }, 1500);
  console.log("in section2");

});

$('.about_link').click(function() {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});

$('.contact_link').click(function() {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
  console.log("in section5");

});
});
