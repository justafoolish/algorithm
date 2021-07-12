//solution 1 - with sort || (O) = nlogn
const maximumProduct_s1 = (nums) => {
  nums.sort((a, b) => a - b);
  let n = nums.length;

  return Math.max(nums[n - 1] * nums[0] * nums[1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};

//solution 2 - without sort || (O) = n
const maximumProduct_s2 = (nums) => {
  let maxNumber1 = (maxNumber2 = maxNumber3 = Number.MIN_SAFE_INTEGER);
  let minNumber1 = (minNumber2 = Number.MAX_SAFE_INTEGER);
  nums.map((number) => {
    //find 3 maximum number
    if (number >= maxNumber1) {
      maxNumber3 = maxNumber2;
      maxNumber2 = maxNumber1;
      maxNumber1 = number;
    } else if (number >= maxNumber2) {
      maxNumber3 = maxNumber2;
      maxNumber2 = number;
    } else if (number >= maxNumber3) {
      maxNumber3 = number;
    }

    //find 2 minimum number (negative case)
    if (number <= minNumber1) {
      minNumber2 = minNumber1;
      minNumber1 = number;
    } else if (number <= minNumber2) {
      minNumber2 = number;
    }
  });

  return Math.max(maxNumber1 * maxNumber2 * maxNumber3, maxNumber1 * minNumber1 * minNumber2);
};
