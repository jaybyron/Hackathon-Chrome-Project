console.log('working');

$(document).ready(function() {
    $("<div id ='nightMode'></div>" ).insertBefore($("body"));
    $("body").css('transform', 'translateY(50px)');
    $("#nightMode").append($("<button class='night-button night-element' id='night-button-1'>Nightmode 1 </button>"));
   // $("#nightMode").append($("<button class='night-button night-element' id='invert'>invert </button>"));
    

    let dropdown = "<span>Text Properties:</span><select class='night-element' id='select-id' name='tags'><option value ='null' >--</option> <option value='h1'>H1</option><option value='h2'>H2</option><option value='h3'>H3</option><option value='h4'>H4</option><option value='h5'>H5</option><option value='h6'>H6</option><option value='p'>p</option><option value='a'>a</option></select>";
    $("#nightMode").append($(dropdown));

    let dropDownField = "<input class='night-element' id='drop-down-input'type='number' value='16'   name='quantity' min='1'>"
    $("#nightMode").append($(dropDownField));

    let colorField = "<span>Color:</span><input class='night-element jscolor' id='jscolors' value='ab2567'></input>"
    $("#nightMode").append($(colorField));

    let selectorDropDown = "<span>Text Properties:</span><select class='night-element' id='selector-id' name='tags'><option value='#'>ID</option><option value='.'>CLASS</option></select>";
    $("#nightMode").append($(selectorDropDown));

    let selectName = "<span>Name:</span><input type='text' class='night-element' id='selectName' name='name'size='10'>"
    $("#nightMode").append($(selectName));

    let selectField = "<span>Property:</span><input type='text' class='night-element' id='selectCSS' name='name'size='10 '>"
    $("#nightMode").append($(selectField));

    let selectValue = "<span>Value:</span><input type='text' class='night-element' id='selectVal' name='name'size='10 '>"
    $("#nightMode").append($(selectValue));
    

    let submitButton ="<button class='night-button night-element' id='select-submit'>UPDATE CSS </button>";
    $("#nightMode").append($(submitButton));





    //FIRST BUTTON
    $('#night-button-1').click(function(){
        $("body").css('background-color','#2f2f30');
        $('h1, h2, h3, h4, h5, h6, p, a').css('color','white');

    })

    //INVERT BUTTON
    $('#invert').click(function(){
        $("body").css('filter','invert(100%)');
 
    })

    //CHANGE FONT SIZE DEPENDING ON DROPDOWN SELECTION
    $("input[type=number]").change(function(){
        let fontSize = $(this).val();
        let e = document.getElementById("select-id");
        let curr = e.options[e.selectedIndex].value;

        $(curr).css({"font-size":fontSize+"px"}); 
     });

     //CHANGE COLOR OF SELECTED INPUT
     $('#jscolors').change(function(){
       let currColor = $(this).val();    
       let e = document.getElementById("select-id");
       let curr = e.options[e.selectedIndex].value;
       console.log(curr);
       $(curr).css({"color":"#"+currColor}); 

    })
     

    $('#select-submit').on('click',function(){
        let e = document.getElementById("selector-id");
        let currSelector = e.options[e.selectedIndex].value;

        let currName = $('#selectName').val();
        let currCSS = $('#selectCSS').val();
        let currVal = $('#selectVal').val();
        let cssObj = {};
        cssObj[currCSS] = currVal;
        let cssString = JSON.stringify(cssObj);
        let selector = currSelector+currName;

        alert(currCSS + ' ' +selector + " " + cssString);
        $(selector).css(JSON.parse(cssString));
        
    })

    //HOVER FUNCTION
    $('img').hover(function(){
        
    })


    /*
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : [[44,43,44],[90,83,82],"N","N","N"]
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
        console.log(palette);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
    */


    

});


// "<div class = 'button'> <button id = 'button1' type= 'button'> Night1 </button> </div>"