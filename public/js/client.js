$( "#rock_button,#paper_button,#scissors_button,#lizard_button,#spock_button" ).click(function() {
  var id=($(this).attr('id')).split('_')[0];

  $.ajax({
   url: 'http://localhost:3000/play/'+id,
   type: 'post',
   dataType: 'html',
   contentType: "application/json; charset=utf-8",
   success: function(data) {
     console.log("here want data");
     console.log(data);
      $("#result").html(data);
   }
 });
});
/*
$.post("http://localhost:3000/play/"+id,
       function(data){
           alert("Data: " + data);
       });
});
*/
