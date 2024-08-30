// !https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.



function expandedForm(num) {

  let arr = num.toString().split('').map(Number)
  let newArray = []
  let b = arr.length - 1

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] * Math.pow(10, b)) !== 0) {
      newArray.push(arr[i] * Math.pow(10, b))
    }
    b--
  }
  return newArray.join(' + ')
}