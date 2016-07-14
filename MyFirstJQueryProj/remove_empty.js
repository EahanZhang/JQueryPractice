
$(document).ready(function() {
    $("#btn1").click(function() {
        $("p").remove(".italic");
    });
    $("#btn2").click(function() {
        $("#div1").empty();
    });
});
