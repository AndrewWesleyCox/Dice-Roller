var numbers = [0,0,0,0,0,0,0,0,0,0,0];
var paragraphs = ["twoP","threeP","fourP","fiveP","sixP","sevenP","eightP","nineP","tenP","elevenP","twelveP"];

var rollCount = 0;

function thisfunction(){
    console.log("hello")
}

function deez(nutz){
    rollCount++;
    numbers[nutz]++;
    changePercentages();
}

function loadNumbers(){
    var x;
    for(x = 0;x < 11;x++){
        document.getElementById(paragraphs[x]).innerHTML = numbers[x] + " - 0.00%";
    }
}

function changePercentages(){
    var x;
    for(x = 0; x < 11;x++){
        var percent = (numbers[x]/rollCount)*100;
        document.getElementById(paragraphs[x]).innerHTML = numbers[x] + " - " + percent.toFixed(2) + "%";
    }
}