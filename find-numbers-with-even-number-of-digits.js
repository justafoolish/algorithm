//solution 1 - convert String (Runtime faster test in leetcode)
const findNumbers_s1 = (nums) => {
    let count = 0
    nums.map(number => {
        if(number.toString().length % 2 === 0)
            count++
    })
    return count
}
//solution 2 - check number range
const findNumbers_s2 = (nums) => {
    let count = 0
    nums.map(number => {
        count += (number > 9 && number < 100) || (number > 999 && number < 10000) || (number === 100000) ? 1 : 0;
    })
    return count
}