// Code your solutions in this file

//const names = ["jafaar", "kevin", "Daphine", "angela"];

/*function writeCards(namesArray, eventName){

    let thankYouCards = [];

    for (let i=0; i < namesArray.length; i++){
        
        thankYouCards.push(`thankyou,${names[i]} for the wonderful ${eventName} gift`);

    

}
return thankYouCards;
}

function countDown(startingNumber){
    while (startingNumber > 0){
        console.log(startingNumber);
        startingNumber -1;*/
}
}*/
//console.log(writeCards(["dapphine", "kevin", "elvis", "brian"], "birthday"));

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Define countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  console.log(writeCards,countDown)