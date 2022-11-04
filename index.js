// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}*/

//wrapGifts(gifts);

//const peopleReceivingCards = ["Charlie", "Samip", "Ali"];
//const forEvent = "surprise";
//const people = ['Guadalupe', 'Samip', 'Ali'];

function writeCards(people, forEvent){
  const array = []
    for(let i = 0; i<people.length; i++){
        array.push(`Thank you, ${people[i]}, for the wonderful ${forEvent} gift!`)
    }
    return array 
}
//console.log(writeCards(people, forEvent));

function countDown (num){
  while (num>=0){
    console.log(num)
    num--
  }
}

countDown(10)