function appendElement() {

    var txt1="<h4>Created by HTML</h4>";
    var txt2=$("<h4></h4>").text("Created by JQuery");
    var txt3=document.createElement("h4");
    txt3.innerHTML="Created by DOM";
    $("body").append(txt1, txt2, txt3);
}

function prependElement() {

    var txt1="<h4>Created by HTML</h4>";
    var txt2=$("<h4></h4>").text("Created by JQuery");
    var txt3=document.createElement("h4");
    txt3.innerHTML="Created by DOM";
    $("body").prepend(txt1, txt2, txt3);
}
$(document).ready(function() {
    $("#btn_appendText").click(function() {
        $("p").append("<b>append text. </b>");
    });
    $("#btn_appendItem").click(function() {
        $("ol").append("<li>append item. </li>");
    });
    $("#btn_appendElement").click(function() {
        appendElement();
    });
    $("#btn_prependText").click(function() {
        $("p").prepend("<b>prepend text. </b>");
    });
    $("#btn_prependItem").click(function() {
        $("ol").prepend("<li>prepend item. </li>");
    });
    
    $("#btn_prependElement").click(function() {
        prependElement();
    });
});
