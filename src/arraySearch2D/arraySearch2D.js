//function that takes in a two-dimensional (2D) array and searches each 2D element for the character `X`

const arraySearch2D = (array) => {
  let count = 0;
 for (const item of array) {
  for (let i=0; i<item.length; i++) {
    if (item[i]=== 'X') {
      count = count + 1;
    }
  }
 }
 return count;
};

module.exports = { arraySearch2D };
