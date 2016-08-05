/*global $*/
/*global api*/
/*global append*/
(document).ready(function(){


$("#searchbox").on("click",function(){
    
    
    
});
$( "#clear" ).on( "click", function() {
  alert( $( this ).text() );
});
$( "#clear" ).trigger( "click" );

  $('row').text("");
   $('col-xs-6').text("");
   
$("#submit").click(function (){
    var textFood = $("#food").val();
  var api = "https://api.foursquare.com/v2/venues/search?client_id=TANBIGMKJ5H3TNHMZXDCNU4RTDJR3HZZ3BP2XK20T3PRRBI1&client_secret=R3XNQ1TCZBU4TDF011W4ST3QFRJDMINWUJ0UW55NHILYZX3X&v=20130815&ll=40.7,-74&query="+textFood;
  var textPlace = $("#place").val();
 
 
  
  console.log(api);
});    
var win = $.getJSON( "api", function() {
 $(".results").text(api[1].textFood);
});



});