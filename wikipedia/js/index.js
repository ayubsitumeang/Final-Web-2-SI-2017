$(document).ready(function(){
  $("#search").click(function(){
    var searchArtikel = $("#searchArtikel").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchArtikel + "&format=json&callback=?"
    
    $.ajax({
      type:"GET",
      url:url,
      success:function(data){
        $("#output").empty();
        
        for (var i = 0; i < data[1].length; i++){
          $("#output").append("<a href='" + data[3][i] + "'><h4>" + data[1][i] + "</h4></a>");
          $("#output").append("<p>" + data[2][i] + "</p>");
          
        }
      },
      error:function(errorMessage){
        alert("Error");
      },
      dataType:"json",
      async:false,
    });
  });
});