console.log('working');

$(document).ready(function() {
    $("<div id ='nightMode'> Test </div>" ).insertBefore($("body"));
    $("body").css('transform', 'translateY(30px)');
    $("#nightMode").append($("<div class = 'button'> <button id = 'button1' type= 'button'> Night1 </button> </div>"));
});


// "<div class = 'button'> <button id = 'button1' type= 'button'> Night1 </button> </div>"