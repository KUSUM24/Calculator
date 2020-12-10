function getHistory(){
    return document.getElementById("history-value").innerText;
    // document.getElementsByClassName
}
// alert(getHistory()); //for checking 
function printHistory(number){
    document.getElementById("history-value").innerText=number;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
    // document.getElementsByClassName
}
// alert(getHistory()); //for checking 
function printOutput(number){
    if(number == "")
    document.getElementById("output-value").innerText=number;
    else
    document.getElementById("output-value").innerText=getFormattedNumber(number);
}
function getFormattedNumber(number){
    var num = Number(number);
    var final = num.toLocaleString("en");
    return final;
}
// printOutput("999999");
function reverseNumberFormat(number){
    return Number(number.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click',function(){
        // alert("Number is: " + this.id);
        var output = reverseNumberFormat(getOutput());
        if(output!=NaN){
            output+= this.id;
            printOutput(output);
        }
    })
}

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        // alert("Operator is:" + this.id);
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1) ;
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
                
            }
            if(output != "" || history != 0){
                output = output == ""? output: reverseNumberFormat(output);
                history = history + output;
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory(history);
                }
                else{
                    // output += this.id;
                    history += this.id;
                    printOutput("");
                    printHistory(history);
                }
            }
        }

    });
}

