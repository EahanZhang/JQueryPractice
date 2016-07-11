

$(document).ready(function() {
    $("#flip").click(function() { 
        $("#panel").slideToggle(4000);
    });
    $("#stop").click(function() {
        $("#panel").stop();
    });
});
