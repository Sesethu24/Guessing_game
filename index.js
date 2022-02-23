var submitBtn = document.querySelector(".submitBtn");
var select = document.querySelector(".select");
var resultElem = document.querySelector(".result")
var guessedNumber;

let randomNumber = Math.ceil((Math.random() * 100))

function guess()
{
    setTimeout(function() {resultElem.innerHTML}, 2000);

    if (document.querySelector(".select").value != null) 
    {
        guessedNumber= document.querySelector(".select").value;
    }
    document.querySelector(".result").innerHTML = guessedNumber;
    console.log(guessedNumber);

    if (guessedNumber < randomNumber) 
    {
        resultElem.innerHTML= "Your guess is too low";
    }
    else if(guessedNumber > randomNumber){
        resultElem.innerHTML ="Your guess is too high";
    
    }
    else
    resultElem.innerHTML = `Correct, the secret number is ${randomNumber}`;

    
}

submitBtn.addEventListener("click",guess);

