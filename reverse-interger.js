//solution 1 - reverse numbers
const reverse_s1 = (x) => {
    let nums = 0;
    let flag = (x >= 0) ? 1 : -1
    x *= (x >= 0) ? 1 : -1

    while(x) {
        nums *= 10
        nums += x%10
        x = Math.floor(x/10)
    }

    return nums < (-2)**31 || nums > (2**31 - 1) ? 0 : nums * flag
}

//solution 2 - reverse converted string
const reverse_s2 = (x) => {
    let flag = x < 0 ? -1 : 1
    x *= x < 0 ? -1 : 1

    let nums = x.toString().split("").reverse().join("")
    nums = parseInt(nums)

    return nums < (-2)**31 || nums > (2**31 - 1) ? 0 : nums * flag
}