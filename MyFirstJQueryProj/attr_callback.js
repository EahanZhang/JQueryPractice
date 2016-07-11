
$(document).ready(function() {
    $("#btn4").click(function() {
        $("#w3c").attr("href", function(i, origValue) {
            return origValue + "/jquery";
        });
    });
});
