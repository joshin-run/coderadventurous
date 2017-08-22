// Pseudo code
//
// get the content of each cell

function letterArr() {
  var letters = document.getElementsByTagName("td")[1].textContent;
  console.log('letters, A = A', letters);
  for (i = 0; i < letters.length; ++i) {
    let newArray = [];
    newArray.push(letters[i]);
    console.log(newArray);
    // var array = [];
    // array = array.push(letters[i]);
    // console.log('inside for loop block', array);
  }
  // console.log(array);
  // return array;
}
letterArr();


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
