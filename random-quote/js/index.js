$(document).ready(function() {
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#F0F8FF"];
  $('#get-quote').on('click',function(){

    var color = Math.floor(Math.random() * colors.length);
      $("body").css({
        background: colors[color],
       });
  });
$("#get-quote").on('click',function(){
    
        $.ajaxSetup ({cache:false});
     $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
          
          $("#quote").html(data[0].content + "<i>- " + data[0].title +"</i>")
   });
    });
});