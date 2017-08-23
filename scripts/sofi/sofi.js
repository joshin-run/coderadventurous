function letterArr() {
  var letters, background, color = "";
  var newArray = [];
  for (i = 0; i < document.all.length; ++i) {
    letters = document.getElementsByTagName("td")[i].textContent;
    background = document.getElementsByTagName("td")[i].style.backgroundColor;
    color = document.getElementsByTagName("td")[i].style.color;
    if (background !== color) {
      newArray.push(letters);
    }
    console.log(newArray);
  }
}
letterArr();
