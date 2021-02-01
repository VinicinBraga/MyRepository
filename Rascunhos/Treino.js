const verificaPalindrome = (string) => {
 console.log(string.split("").reverse().join(""))
  if (string.split("").reverse().join("") === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('Vinicius')); //false