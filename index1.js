
// selectors for working of calculator
var screen = document.querySelector(".screen");

var button = $(".btn");



// themes 

// setting the themes
function darkTheme(){

    // body
    $('body').css({"background" : "#17062a"})

    // title 
    $('.title').css({"color" : "#f4db48"})

    // container and screen
    $('.container , .screen').css({"background" : "#1e0836" , "color" : "#f4db48"});

    // buttons
    $('.btn').css({"background" : "#301b49"})
    $('.reset, .del').css({"background" : "#56077c"})
    $(".equals").css({"background" : "#00decf" , "color" : "black"})

    // footer
    $('footer').css({"color" : "#f4db48"});

}

function lightTheme(){
    // all 
    $("*").css({"background" : "" , "color" : ""})

    // body 
    $('body').css({"background" : "#e6e6e6"})

    // calculator screen
    $('.screen').css({"background" : "#eeeeee"})

    // container , screen and title 
    $('.container,.screen,.title').css({"color" : "black"})

    // btn containers
    $('.container').css({"background" : "#d3cdcd"})

    // del and reset button
    $('.del , .reset').css({"background" : "#388187"})
    
    // footer
    $('footer').css({"color" : "black"});

}


// changing the themes
function toggle(value){
    value = parseInt(value , 10);

    if (value === 1){
        lightTheme();     
    }
    else if (value === 2){
        // all 
        $('*').css({"background" : "" , "color" : ""})
    }
    else if (value === 3){
        darkTheme();
    }
}




// calculator functions 

var screenValue = '';

button.click(function(){
    var buttonElm = this.innerText;

    if (buttonElm === '='){
        screen.value = eval(screenValue);
    }

    else if(buttonElm === "x"){
        buttonElm = "*";
        screenValue += buttonElm;
        screen.value = screenValue;
    }

    else if (buttonElm === 'DEL'){
        screenValue = '';
        screen.value = screenValue;
    }

    else if(buttonElm === 'RESET'){
        screen.value = '';
        window.location.reload(false);
    }

    else {
        screenValue += buttonElm;
        screen.value = screenValue;
    }
    
})