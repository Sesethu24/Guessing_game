var msgBtn = document.querySelector(".msgBtn");
let randomNumber = Math.ceil((Math.random() * 100))

function guess(){

    if (guessNumber < randomNumber) {
        msgBtn.innerHTML= "Your guess is too low";
    }else if(guessNumber > randomNumber){
        msgBtn.innerHTML= "Your guess is too high";
    }else
    msgBtn.innerHTML = 'Correct! the secret number is ${}'
}