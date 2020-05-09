$(document).ready(function () {
  // Win 1 Server Ranges
  // Win 1 Server Ranges RAM Slider
  $("#ram-slider").slider({
    value: 64,
    min: 1,
    max: 128,
    step: 1,
    slide: function (event, ui) {
      $("#ram-amount").val(ui.value + " GB");
      $("#ram-price").val(ui.value * 2 + " $");
      $.fn.calcTotalPrice = function () {
        var ramPrice = parseInt($("#ram-price").val()),
          hdPrice = parseInt($("#hd-price").val()),
          bwPrice = parseInt($("#bw-price").val()),
          dbPrice = parseInt($("#db-price").val());
        $("#tp-price").val(ramPrice + hdPrice + bwPrice + dbPrice + " $");
      };
      $.fn.calcTotalPrice();
    },
  });
  var ramSliderValue = $("#ram-slider").slider("value");
  $("#ram-amount").val(ramSliderValue + " GB");
  $("#ram-price").val(ramSliderValue * 2 + " $");
  // Win 1 Server Ranges HD Slider
  $("#hd-slider").slider({
    value: 500,
    min: 100,
    max: 1000,
    step: 100,
    slide: function (event, ui) {
      $("#hd-amount").val(ui.value + " GB");
      $("#hd-price").val(ui.value * 3 + " $");
      $.fn.calcTotalPrice = function () {
        var ramPrice = parseInt($("#ram-price").val()),
          hdPrice = parseInt($("#hd-price").val()),
          bwPrice = parseInt($("#bw-price").val()),
          dbPrice = parseInt($("#db-price").val());
        $("#tp-price").val(ramPrice + hdPrice + bwPrice + dbPrice + " $");
      };
      $.fn.calcTotalPrice();
    },
  });
  var hdSliderValue = $("#hd-slider").slider("value");
  $("#hd-amount").val(hdSliderValue + " GB");
  $("#hd-price").val(hdSliderValue * 3 + " $");
  // Win 1 Server Ranges BW Slider
  $("#bw-slider").slider({
    value: 1000,
    min: 50,
    max: 2000,
    step: 50,
    slide: function (event, ui) {
      $("#bw-amount").val(ui.value + " GB");
      $("#bw-price").val(ui.value * 2 + " $");
      $.fn.calcTotalPrice = function () {
        var ramPrice = parseInt($("#ram-price").val()),
          hdPrice = parseInt($("#hd-price").val()),
          bwPrice = parseInt($("#bw-price").val()),
          dbPrice = parseInt($("#db-price").val());
        $("#tp-price").val(ramPrice + hdPrice + bwPrice + dbPrice + " $");
      };
      $.fn.calcTotalPrice();
    },
  });
  var bwSliderValue = $("#bw-slider").slider("value");
  $("#bw-amount").val(bwSliderValue + " GB");
  $("#bw-price").val(bwSliderValue * 2 + " $");
  // Win 1 Server Ranges DB Slider
  $("#db-slider").slider({
    value: 12,
    min: 1,
    max: 20,
    step: 1,
    slide: function (event, ui) {
      $("#db-amount").val(ui.value + " DB");
      $("#db-price").val(ui.value * 4 + " $");
      $.fn.calcTotalPrice = function () {
        var ramPrice = parseInt($("#ram-price").val()),
          hdPrice = parseInt($("#hd-price").val()),
          bwPrice = parseInt($("#bw-price").val()),
          dbPrice = parseInt($("#db-price").val());
        $("#tp-price").val(ramPrice + hdPrice + bwPrice + dbPrice + " $");
      };
      $.fn.calcTotalPrice();
    },
  });
  var dbSliderValue = $("#db-slider").slider("value");
  $("#db-amount").val(dbSliderValue + " DB");
  $("#db-price").val(dbSliderValue * 4 + " $");
  // Total Price For Server
  $.fn.calcTotalPrice = function () {
    var ramPrice = parseInt($("#ram-price").val()),
      hdPrice = parseInt($("#hd-price").val()),
      bwPrice = parseInt($("#bw-price").val()),
      dbPrice = parseInt($("#db-price").val());
    $("#tp-price").val(ramPrice + hdPrice + bwPrice + dbPrice + " $");
  };
  $.fn.calcTotalPrice();
});
