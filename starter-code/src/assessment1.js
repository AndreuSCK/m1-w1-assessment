// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x * y
  } else {
    return false
  }
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return (num % 2 === 0)
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return (a > b ? a : b)
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    return Math.max(a, b, c)
  } else {
    return false
  }

}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers[0]) {
    return numbers.reduce((a, b) => a + b)
  } else {
    return 0
  }

}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers[0]) {
    return Math.max(...numbers)
  } else {
    return 0
  }
}

// Return the longest string in an array
function longestString(strings) {
  return strings.reduce((b, a) => a.length > b.length ? a : b)
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word)
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!wordsArr[0]) {
    return false
  } else {

    let unicas = []
    wordsArr.forEach((item) => {
      //pushes only unique element
      if (!unicas.includes(item)) {
        unicas.push(item);
      }
    })
    // unicas.sort((a, b) => a > b)
    return unicas[2]
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxNum = 0
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j])
      if (matrix[i][j] > maxNum) {
        maxNum = matrix[i][j]
      }
    }
  }
  return maxNum
}
