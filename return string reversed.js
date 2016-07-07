//write a new function that takes in a string as an argument and returns the string reversed. 
//You may not use the .reverse() method

function reverse(name) {
  newName=''
  for (var i = name.length -1; i >=0; i--){
    newName += name[i];
  }
  return newName;
}

console.log(reverse('CHEN LIU'));