/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {

    let totalSum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        let sum = 0;

        for(let j = i; j < arr.length; j++)
        {
            sum += arr[j];

            let length = j - i + 1;

            if(length % 2 !== 0)
            {
                totalSum += sum;
            }
        }
    }

    return totalSum;
};