// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/scrabble-scorer.html
const input = require ('readline-sync');
let  p1 = {};
let newPointStructure ={};
let  myNewObject = {};
let myBonusCount = 0;
let myscrabbleCount = 0;

// Code your transform function here:
function transform (p1) {
  for (i in p1) {
    for (j = 0; j < p1[i].length; j++){
        myNewObject[oldPointStructure[i][j]] = i;
    }
  }
return myNewObject;
}

// Code your initialPrompt function here:
const welcomeMessage = 
`Welcome to the Scrabble score calculator!

Which scoring algorithm would you like to use?

0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are worth 3 pts and consonants are 1 pt.
`;
console.log(welcomeMessage);
let theAnswer = input.question("Enter 0, 1, or 2: ");

// Code your runProgram function here:


// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// Use the transform function to create the newPointStructure object here:
newPointStructure = transform(oldPointStructure);
console.log(newPointStructure);

// Create your scoringAlgorithms array here:
function simpleScore(p1){
  return p1.length;
}

function bonusVowels(p1){
  for (j = 0; j < p1.length; j++){
     if (p1[j] == 'a'||p1[j] =='e'||p1[j] =='o'||p1[j] =='u'||p1[j] =='y'
     ||p1[j] == 'i'){
       myBonusCount+=3;
     }
     else {myBonusCount++;}
  }
  return myBonusCount;
}

function ScrabbleScore(p1, newPointStructure){
  for (i in p1){
    for (j= 0; j < p1[i].length; j++){
      if (newPointStructure.includes(i)){
           myscrabbleCount +=newPointStructure[i][j];
      }
    }
  }
  return myscrabbleCount;
}

//Testing functions
var p2 = "someVal"

var mySimpletest = simpleScore(p2);
var bonusTest = bonusVowels(p2);
var scrabbleTest = ScrabbleScore(p2, newPointStructure);
console.log("Simple Test: " + mySimpletest);
console.log("Bonus Test: " + bonusTest);
console.log("Scrabble Test: " + scrabbleTest);