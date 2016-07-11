var jq = JQuery.noconflict();

jq(document).ready( function() {
    jq("button").click( function() {
        jq("p").hide();
    });
});
