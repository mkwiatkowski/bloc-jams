$(document).ready(function() {
  $('.hero-content h3').click(function(){
    var subText = $(this).text();
    $(this).text(subText + "!");
  });

  var onHoverAction = function(event) {
    console.log('Hover action triggered.');
    $(this).animate({'margin-top': '10px'});
  };
 
  var offHoverAction = function(event) {
    console.log('Off-hover action triggered.');
    $(this).animate({'margin-top': '0px'});
  };
 
  $('.selling-points .point').hover(onHoverAction, offHoverAction);
  
  $('h3').hover(function(){
    $(this).css({'color': '#55cc00'});
  });
  
  $('.selling-points .point h5').click(function(){
    $(this).css({'font-size': '28px'});
  });
  
  $('.hero-content h1').click(function(){
    $(this).fadeOut('slow');
  });
});