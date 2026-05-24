/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let left = 0
    let right = arr.length - 1
    let max = 0

    while (left < right){
        let volume = (right - left) * (Math.min(arr[right], arr[left]))
        max = Math.max(max, volume)

        if(arr[left] <= arr[right]){
            left++
            continue
        }
        if(arr[left] >= arr[right]) {
            right--
        }
    }
    return max
};