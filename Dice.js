var numbers = [0,0,0,0,0,0,0,0,0,0,0];
var paragraphs = ["twoP","threeP","fourP","fiveP","sixP","sevenP","eightP","nineP","tenP","elevenP","twelveP"];

function thisfunction(){
    console.log("hello")
}

function deez(nutz){
    numbers[nutz]++;
    document.getElementById(paragraphs[nutz]).innerHTML = numbers[nutz]
}

function loadNumbers(){
    var x;
    for(x = 0;x < 10;x++){
        numbers[x]++;
        document.getElementById(paragraphs[x]).innerHTML = numbers[x];
    }
}