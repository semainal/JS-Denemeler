document.write("<table border='3'><tr>");
        for (var x = 1; x <= 10; x++) {        
        document.write("<td>");
            for (var i = 1; i <= 10; i++) {
                document.write(x+"x" + i + "=" + x * i + "<br/>");
            }
            if(x==5)
            {
            document.write("</tr><tr>");
            }
            document.write("</td>");
        }    
        document.write("</tr><table>"); 



const box = document.querySelector("#box");
const startButton = document.querySelector("#start");
const nextButton = document.querySelector("#next");
const endButton = document.querySelector("#end");

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
const answerButton = document.querySelector("#send");
let enterValue = document.querySelector("#answer");
const message1 = document.querySelector("#info1");
const message2 = document.querySelector("#info2");
let skore = document.querySelector("#skore");
const title = document.querySelector("#title");


let numberOf = 1;
let rightNumber = 0;
let result;



startButton.addEventListener("click", start);
nextButton.addEventListener("click", next);
endButton.addEventListener("click", end);
answerButton.addEventListener("click", answer);

function start() {
    enterValue.value == "";
    title.innerText = "SORU - " + numberOf;
    num1 = Math.floor(Math.random()*9) + 1;
    num2 = Math.floor(Math.random()*9) + 1;
    startButton.style.display = "none";
    box.style.display = "block";


   
}

function end() {
    let control =  confirm("Are you sure? Your score will be reset")
    if(control == true) {
        numberOf = 1;
        title.innerHTML ="Right Answer: " + rightNumber;
        box.style.display = "block";
        startButton.style.display = "block";
    }
}



function answer() {
    if(enterValue.value == " ") {
        alert("Please enter a value.");
    } else {
        if(enterValue.value == (num1*num2)) {
            rightNumber = rightNumber + 1;
            console.log("Right");
            nextButton.style.display = "block";
            box.style.display = "block";
            message1.style.display ="block";
        } else {
            console.log("Wrong");
            nextButton.style.display ="block";
            box.style.display = "block";
            message2.style.display ="block";
        }
    }
}


function next() {
    message1.style.display = "none";
    numberOf = numberOf + 1;
    title.innerText = "SORU - " + numberOf;
    message2.style.display = "none";
    nextButton.style.display = "none";
    box.style.display = "block";

    enterValue.value = " ";
    num1 = Math.floor(Math.random() * 9) +1;
    num2 = Math.floor(Math.random()* 9) + 1;
    document.querySelector("#num1").innerText = num1;
    document.querySelector("#num2").innerText = num2;
    skore.innerHTML = "Right Answer: " + rightNumber;

   
}