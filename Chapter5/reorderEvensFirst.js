/**
 * Reorder the input list so that it has evens in beginning of list and odd at the end
 * constraint don't use extra n space to make this change
 * @param { number []} arr
 * @returns void
 */
function reorderEvenFirst(arr) {
  /**
     * swap odd from left to even on the right
     */

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] % 2 !== 0) { // when left most number is not even
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      r--;
    } else {
      l += 1;
    }
  }
}

const l1 = [3, 4, 5, 2, 1];
reorderEvenFirst(l1);
console.log(l1);
