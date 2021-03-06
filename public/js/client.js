$(document).ready(function() {
  $.ajax({
      url: '/result',
      type: 'get',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function(data) {
          $("#result").html(renderjson.set_show_by_default(true)(data));
      }
  });
});
$("#rock_button,#paper_button,#scissors_button,#lizard_button,#spock_button").click(function() {
    var id = ($(this).attr('id')).split('_')[0];

    $.ajax({
        url: '/play/' + id,
        type: 'post',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data.outcome === "win") {
                $("#info").html('<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Won!</strong>You won for <strong>' + id + '</strong>.</div>');
            } else if (data.outcome === "losses") {
                $("#info").html('<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Loss!</strong>You loss for <strong>' + id + '</strong>.</div>');
            } else if (data.outcome === "ties") {
                $("#info").html('<div class="alert alert-warning alert-dismissible"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Tie!</strong>You tie for <strong>' + id + '</strong>.</div>');
            } else {
                $("#info").html();
            }
            $("#result").html(renderjson.set_show_by_default(true)(data));
        }
    });
});
