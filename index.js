// Code your solutions in this file

const friends = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"
function writeCards(friends, event) {
    let message = []
  for (let i = 0; i < friends.length; i++) {
    message.push(`Thank you, ${friends[i]}, for the wonderful ${[event]} gift!`)
  }
  return message;
}

function countDown(i){
    while (i>= 0) {
    console.log(i--);
    }
}  