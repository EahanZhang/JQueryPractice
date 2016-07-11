
$(document).ready(function() {
    $("button").click(function() {
        $("p").hide(1000, function() {
            alert("The program is now hidden.");
        });
    });
});
