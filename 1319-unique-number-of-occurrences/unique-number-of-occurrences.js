/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let map=new Map()
       
       for(let i=0;i<arr.length;i++ )
       {
              map.set(arr[i],(map.get(arr[i]) || 0) +1)
       }
       
       let set=new Set()

       for(let count of map.values())
       {
        if(set.has(count))
        {
            return false;
        }
        set.add(count)
       }
       return true;
};