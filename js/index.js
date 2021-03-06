$(document).ready(function(){
  $(".sbox").hide();
  
  $("#search").click(function(){
    $("#search").hide();
    $(".sbox").toggle();
  });
  
  $("#search-input").click(function(){
     $(".sbox").toggle();
     $("#search").show();
    
      var input = $(".input").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?";
      
      $.ajax({
        type:"GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          $("#output").html("");
          for(var i = 0; i < data[1].length; i++){
           $("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
          }
        },
        error: function(errorMessage){
          alert("Error");        
        }
      });
  });
});