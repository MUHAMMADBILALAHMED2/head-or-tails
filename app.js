const result = document.querySelector(".app")
// const tails = document.querySelector(".tail")

function toss() {
const logic = Math.ceil(Math.random()*2)
console.log(logic);
const heads = 1
const tails = 2

if (logic==heads) {
result.innerHTML="YOU WON A <br> TOSS"
} 
else
{result.innerHTML="YOU<br>LOSS"}
}


function tossAgain() {
    result.innerHTML = "";
  }

