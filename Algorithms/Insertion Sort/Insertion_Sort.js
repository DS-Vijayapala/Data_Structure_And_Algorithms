
// Insertion Sort Algorithm - Sorts an array in ascending order

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let currentVal = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > currentVal) {

            arr[j + 1] = arr[j];

            j--;

        }

        arr[j + 1] = currentVal;

    }

    return arr;

}


console.log(insertionSort([2, 0, 9, 76, 4]));
