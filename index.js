var submitBtn = document.querySelector(".submitBtn");
var select = document.querySelector(".select");
var resultElem = document.querySelector(".result");
var guessedNumber;

let randomNumber = Math.ceil((Math.random() * 100));

function guess()
{
    if (document.querySelector(".select").value != null) 
    {
        guessedNumber= document.querySelector(".select").value;
    }
    document.querySelector(".result").innerHTML = guessedNumber;
    
    if(guessedNumber <= 0 || guessedNumber > 100){
        resultElem.innerHTML = "Numbers must be between 1 and 100";
    }
    else
    if (guessedNumber < randomNumber) 
    {
        resultElem.innerHTML= "Your guess is too low";
    }
    else if(guessedNumber > randomNumber)
    {
        resultElem.innerHTML ="Your guess is too high";
    }
    else if(guessedNumber == randomNumber){
        resultElem.innerHTML = `Correct, the secret number is ${randomNumber}`;
    
    setTimeout(function(){
		resultElem.innerHTML = "New game started!";
       }, 3000);
    }
    setTimeout(function(){
        resultElem.innerHTML = "";
    }, 2000);
}
submitBtn.addEventListener("click",guess);

