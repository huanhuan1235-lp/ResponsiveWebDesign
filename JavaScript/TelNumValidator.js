function telephoneCheck(str) {
    /*
    Set start and end with ^, $
    Country code 1 is optional, so is the space behind it
    First part can have bracket, so divide it into two groups
    Hyphen or space can be used (or not) to divide three parts of the phone number
    */
    const test_regex = /^(1 ?)?([0-9]{3}|(\([0-9]{3}\)))[ -]?[0-9]{3}[ -]?[0-9]{4}$/;
    return test_regex.test(str);
  }
  
  //telephoneCheck("555-555-5555");