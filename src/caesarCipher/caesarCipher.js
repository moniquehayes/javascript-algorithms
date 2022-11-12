//function that takes a string and an offset and shifts each letter of the string in the alphabet by the given offset

const caesarCipher = (string, offset) => {
  let result = "";

  //adjust offset for readability
  while (offset < 0) {
    offset = 26 + offset;
  }

  //loop over each character
  for (let i = 0; i < string.length; i++) {
    //get the current character
    const char = string[i];
    //get the corresponding charCode
    const charCode = char.charCodeAt(0);

    //prepare the character in a variable
    let offsetChar = char;

    //check charCode value to see if it is a lower case or upper case letter. If so, offset it
    if (charCode >= 65 && charCode <= 90) {
      offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      offsetChar = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
    }

    //add the character to the result string
    result += offsetChar;
  }

  return result;
};

module.exports = { caesarCipher };
