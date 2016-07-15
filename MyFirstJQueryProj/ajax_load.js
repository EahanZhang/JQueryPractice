

$(document).ready(function() {
    $("button").click(function() {
        $('#test').load('./demo_text.txt',
            function(responseTxt, statusTxt, xhr) {
            alert("statusTxt: " + statusTxt);
            alert("responseTxt: " + responseTxt);
            if(statusTxt=="success") {
                alert("outside file load success.");
            }
            if(statusTxt == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }

        });
    });
});
