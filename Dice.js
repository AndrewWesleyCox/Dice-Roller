var numbers = [0,0,0,0,0,0,0,0,0,0,0];
var paragraphs = ["twoP","threeP","fourP","fiveP","sixP","sevenP","eightP","nineP","tenP","elevenP","twelveP"];

var rollCount = 0;

function deez(nutz){
    rollCount++;
    numbers[nutz]++;
    changePercentages();
}

function changePercentages(){
    document.getElementById("total").innerHTML = rollCount;
    var x;
    for(x = 0; x < 11;x++){
        if(rollCount == 0) percent = 0;
        else var percent = (numbers[x]/rollCount)*100;
        document.getElementById(paragraphs[x]).innerHTML = numbers[x] + " - " + percent.toFixed(2) + "%";
    }
}