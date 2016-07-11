
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("Text: " + $("#test1").text());
    });

    $("#btn2").click(function() {
        alert("Html: " + $("#test1").html());
    });
    
    $("#btn3").click(function() {
        alert("Value: " + $("#test2").val());
    });

    $("#btn4").click(function() {
        alert("Attr: " + $("#test3").attr("href"));
    });
});
