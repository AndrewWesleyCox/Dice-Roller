var numbers = [0,0,0,0,0,0,0,0,0,0,0];
var paragraphs = ["twoP","threeP","fourP","fiveP","sixP","sevenP","eightP","nineP","tenP","elevenP","twelveP"];

var rollCount = 0;
var rollHistory = "";

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

function roll(){
    var roll1 = Math.floor(Math.random()*5)+1;
    console.log(roll1);
    var roll2 = Math.floor(Math.random()*5)+1;
    console.log(roll2);
    var rollTotal = roll1 + roll2;
    rollHistory = rollHistory.concat(rollTotal.toString() + " ");
    document.getElementById("randomList").innerHTML = rollHistory;
    deez(rollTotal - 2);
}