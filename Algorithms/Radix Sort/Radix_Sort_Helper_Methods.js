
function getDigit(num, i) {

  digit = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

  console.log(digit);

  return digit


}

function digitCount(num) {

  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;

}

function mostDigits(nums) {

  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {

    maxDigits = Math.max(maxDigits, digitCount(nums[i]));

  }

  return maxDigits;

}

function radixSort(nums) {

  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {

    // Create buckets for each digit (0–9)

    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {

      const digit = getDigit(nums[i], k);

      digitBuckets[digit].push(nums[i]);

    }

    // Rebuild array from buckets

    nums = [].concat(...digitBuckets);

  }

  return nums;

}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));











