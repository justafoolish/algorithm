const findMedianSortedArrays = (nums1, nums2) => {
    let nums = []
    while(nums1.length && nums2.length) {
        if(nums1[0] <= nums2[0]) {
            nums.push(nums1.shift())
        }
        else {
            nums.push(nums2.shift())
        }
    }
    nums = [...nums, ...nums2, ...nums1]
    const length = nums.length

    return (length % 2 === 0) ? (nums[length / 2 ] + nums[length / 2 - 1] ) / 2 : nums[Math.floor(length/2)];
}