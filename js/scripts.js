$(document).ready(function(){
  $("#form-one").submit(function(event){
    var name1input = $("input#name").val();
    var address1input = $("input#address").val();

    $(".name").text(name1input);
    $(".address").text(address1input);

    $("#letter").fadeToggle();
    event.preventDefault();
  });
});
