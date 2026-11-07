/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    //as strings are immutable we can modify them so convert string to array for mnaipulatingit

     let arr=s.split("");

     //traverse the array for spcified k characters like incresing the i value depends on i++ last increment condiiton

     for(let start=0; start<arr.length;start+=2*k)
     {
        let left=start;
        let right= Math.min(start+k-1,arr.length-1)

        while(left<right)
        {
            [arr[left],arr[right]]=[arr[right],arr[left]]

            left++;
            right--;
        }
     }
      return arr.join("");
};