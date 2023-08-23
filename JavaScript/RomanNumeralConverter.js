function convertToRoman(num) {
    let ret_str = "";
    const Roman_num = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] ;
    const Arabic_num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    // Add to ret_str appropriate amount of string from Roman_num
    for(let i = 0; i < Roman_num.length; i++) {
      let quotient = Math.floor(num / Arabic_num[i]);
      console.log(quotient);
      num -= quotient * Arabic_num[i];
      ret_str += Roman_num[i].repeat(quotient);
    }
   return ret_str;
  }
  
  // convertToRoman(36);