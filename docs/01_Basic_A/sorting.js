const createArrayOfSmallNumbers = (size) => {
  const array = [];

  for (let i = 0; i < size; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }

  return array;
}

/*
  The insertion sort algorithm is known to be very fast for small arrays
  The sorting can be illustrated with having a hand full of cards
  You then take one card and place it on your left hand
  The left hand will have the sorted cards (it will be a subarray of the array)
  The right hand will have the unsorted cards (it will be the other subarray of the array - the unsorted array)
  Each iteration we take the first card from the right hand and place it on the sorted location of left hand
  Let see now in the code
*/

const insertionSort = (array) => {
  const arrayLength = array.length;

  // We start with one card on the left hand, the index 0 of the array that is why the loop starts at 1
  // Array[i] is the card we are taking from the right hand - the unsorted array
  for (let i = 1; i < arrayLength; i++) {
    const current = array[i];

    // We take the index of the first card from the left hand - the sorted array
    let j = i - 1;

    // We compare the current card with the card on the left hand
    // If the current card is smaller than the card on the left hand
    // We move the card on the left hand to the right
    // We then place the current card on the left hand
    // We repeat this process until we find the right place for the current card
    // Array[j] is a card from the left hand - the sorted array
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    // We place the current card on the left hand
    array[j + 1] = current;
  }

  return array;
}

const createArrayOfArraysOfSmallNumbers = (numberOfArrays, size) => {
  const array = [];

  for (let i = 0; i < numberOfArrays; i++) {
    array[i] = createArrayOfSmallNumbers(size);
  }

  return array;
}

const sortAllTheArraysAndCalculateTimeOfExecution = (arrayOfArray) => {
  const timeStart = new Date().getTime();

  for (let i = 0; i < arrayOfArray.length; i++) {
    insertionSort(arrayOfArray[i]);
  }

  const timeEnd = new Date().getTime();

  return timeEnd - timeStart;
}

// To estimate the time of execution to sort 10 billion of arrays of 11 elements
// We create SIZE_OF_ARRAY of 11 elements that is big enough but not too long to execute
// We then sort them
// We execute the function NUMBER_OF_ARRAYS times
// Then we multiply the time of execution by the quotient of NUMBER_OF_ARRAYS / ONE_BILLION

const NUMBER_OF_ARRAYS = 10 ** 7;
const SIZE_OF_ARRAY = 11;
const ONE_BILLION = 10 ** 10;

const quotient = ONE_BILLION / NUMBER_OF_ARRAYS;

const arrayOfArrays = createArrayOfArraysOfSmallNumbers(NUMBER_OF_ARRAYS, SIZE_OF_ARRAY);
const timeOfSortingManyArrays = sortAllTheArraysAndCalculateTimeOfExecution(arrayOfArrays);

console.log(`Time of sorting ${NUMBER_OF_ARRAYS} arrays: ${timeOfSortingManyArrays} ms`);
console.log(`Estimated time of sorting One billion arrays: ${quotient * timeOfSortingManyArrays} ms`);
console.log(`In seconds: ${quotient * timeOfSortingManyArrays / 1000} s`);
