
$(document).ready(function() {
    $("#btn1").click(function() {
        $("div").animate({ 
            left: '250px',
            opacity: '1.0',
            height: '150px',
            width: '150px'
        }, "slow");
    });
    $("#btn2").click(function() {
        $("div").animate({ 
            left: '0px',
            opacity: '1.0',
            height: '100px',
            width: '100px'
        }, "slow");
    });
});
