

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));

    const right = mergeSort(arr.slice(mid));

    console.log(left, right);


    return mergeArrays(left, right);

    //console.log(mergeSort([1, 3, 5, 10, 17, 2, 4, 10, 6, 25]));

}

function mergeArrays(arr1, arr2) {

    const result = [];

    let i = 0;
    let j = 0;

    // Compare each item from arr1 and arr2

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {

            result.push(arr1[i]);

            i++;

        } else {

            result.push(arr2[j]);

            j++;

        }

    }

    // Push remaining values from arr1

    while (i < arr1.length) {

        result.push(arr1[i]);

        i++;

    }

    // Push remaining values from arr2

    while (j < arr2.length) {

        result.push(arr2[j]);

        j++;

    }

    return result;

}


console.log(mergeSort([1, 3, 5, 10, 17, 2, 4, 10, 6, 25]));




