console.log('working');

$(document).ready(function() {
    $("<div id ='nightMode'></div>" ).insertBefore($("body"));
    $("body").css('transform', 'translateY(50px)');
    $("#nightMode").append($("<button class='night-button' id='night-button-1'>Nightmode 1 </button>"));


    $('#night-button-1').click(function(){
        $("body").css('background-color','#2f2f30');
        $('h1, h2, h3, h4, h5, h6, p, a').css('color','white');

    })
});


// "<div class = 'button'> <button id = 'button1' type= 'button'> Night1 </button> </div>"
