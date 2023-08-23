function rot13(str) {
    let ret_str = "";
    for(let i = 0; i < str.length; i++) {
      let str_ascii = str.charCodeAt(i);
      if((65 <= str_ascii) && (str_ascii <= 90)) { // Only characters that are alphabet
        str_ascii -= 13;
        if(str_ascii < 65) {
          str_ascii += 26; // In order to keep letters uppercase
        }
      }
      ret_str += String.fromCharCode(str_ascii);
    }
    return ret_str;
  }
  
  // rot13("SERR PBQR PNZC");