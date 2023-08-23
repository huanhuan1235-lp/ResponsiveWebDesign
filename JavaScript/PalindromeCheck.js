function palindrome(str) {
    // Split string into array
    // Filter the array, only the alphanumeric characters
    // Turn all characters to lower case
    let str_arr = str.split("").filter((char) => char.match(/^[0-9a-zA-Z]/)).map((char) => char.toLowerCase());
    // Search to the middle, checking forward equals backward
    for(let i = 0; i < (str_arr.length / 2); i++) {
      if(str_arr[i] !== str_arr[str_arr.length - 1 - i]) {
        return false
      }
    }
    return true;
  }
  
  // palindrome("eye");