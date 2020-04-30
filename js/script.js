$(document).ready(function() {
  // Win 1 Server Ranges
  $("#ram-slider").slider({
    value: 100,
    min: 1,
    max: 128,
    step: 1,
    slide: function(event, ui) {
      $("#ram-amount").val(ui.value + " " + "GB");
    }
  });
  $("#ram-amount").val($("#ram-slider").slider("value") + " " + "GB");

  $("#hd-slider").slider({
    value: 1000,
    min: 1,
    max: 1000,
    step: 100,
    slide: function(event, ui) {
      $("#hd-amount").val(ui.value + " " + "GB");
    }
  });
  $("#hd-amount").val($("#hd-slider").slider("value") + " " + "GB");

  $("#bw-slider").slider({
    value: 1950,
    min: 50,
    max: 2000,
    step: 50,
    slide: function(event, ui) {
      $("#bw-amount").val(ui.value + " " + "GB");
    }
  });
  $("#bw-amount").val($("#bw-slider").slider("value") + " " + "GB");

  $("#db-slider").slider({
    value: 20,
    min: 1,
    max: 20,
    step: 1,
    slide: function(event, ui) {
      $("#db-amount").val(ui.value + " " + "DB");
    }
  });
  $("#db-amount").val($("#db-slider").slider("value") + " " + "DB");
});
