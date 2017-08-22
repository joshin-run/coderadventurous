// Pseudo code
//
// get the content of each cell

function letterArr() {
  var letters = "";
  var newArray = [];
  for (i = 0; i < document.all.length; ++i) {
    letters = document.getElementsByTagName("td")[i].textContent;
    newArray.push(letters);
    console.log(newArray);
  }
}
letterArr();
  // console.log(array);
  // return array;

// newArray.push(letters);
// console.log(newArray);
// let newArray = [];
// newArray.push(letters);
// console.log(newArray);
// var array = [];
// array = array.push(letters[i]);
// console.log('inside for loop block', array);


// let letter = function() {
//   var elem = document.getElementsByTagName('td');
//   var innerText = elem[0].innerHTML;
//   return innerText;
// }
// console.log(letter);





// function myfunction(foo) {
//     var elem = foo.getElementsByTagName('p');
//     var TextInsideLi = elem[0].innerHTML;
// }​

// loop through each '<td>'
// goal to add each letter to an array and return/log
// let letterArr = [];
// if '<td>' cell is the same color as it's text, then it is not added


// identify the color of each letter in each cell
// identify the background color of each cell
// if the letter is a different color from the background color of the cell it is displayed in, then add that letter to the array.
// if the letter is the same color as the background it is displayed in, do not add that letter to the array
// return the array
