console.log('working');

$(document).ready(function() {
    $("<div id ='coolStickyNav'> Test </div>" ).insertBefore($("body"));
    $("body").css('transform', 'translateY(30px)');
});