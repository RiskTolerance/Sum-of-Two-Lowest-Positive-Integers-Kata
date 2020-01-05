function sumTwoSmallestNumbers(numbers) {  
    //add the reducer function from mdn
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //sort the numbers
    let sortArray = numbers.sort(function(a, b){return a-b});
    //reduce the array length to the two lowest
    sortArray.length = 2;
    //use reduce() to add the numbers together
    return sortArray.reduce(reducer);
    //console.log(sortArray);
  }