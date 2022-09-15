//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_names = ['Eyo', 'Henry', 'Franny', 'Athena', 'Indy', 'Dilbert', 'Dot', 'Marley', 'Butch', 'Daisy']
let dog_string = "There are many good dogs. I wish i could name them all. Here are some names: Dilbert, Indy, Daisy, Dot. But even if they're not here we love them very much"

function findWords(dog_names, dog_string){
    for (let i = 0; i < dog_names.length; i++){
        if ( dog_string.includes(dog_names[i])){
        console.log("Matched dog_name")}
    else{console.log("No match")}

    }
}

//Call method here with parameters
findWords(dog_names, dog_string)




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

 let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
   for(let i =0; i < arr.length; i++){
    if (i % 2 == 0){
        arr.splice(i, 1, 'even index')
    }
   }
return arr
}
console.log (replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Code Wars

//If you can't sleep, just count sheep!!

//Task:
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let sheep = '';
  for (i = 1; i <= num; i++) {
    sheep += i + ' sheep...';
  }
  return sheep;
}


//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1);
  };