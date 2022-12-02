/**
 * Given an array a and pivot index, the number before it should be less than pivot index 
 *  and the after should be greater. The pivotIndex will stay same but pivot Value should change to make this statement true
 * @param {number []} a 
 * @param {number} pivotIndex 
 * @returns void
 * 
 * Iterate over the code
 * [0,1,2,0,2,1,1] pivot is A[3] == 0
 *        ^  
 * i = 0 j = n pivot = 0 case doesnt work when pivot is 0
 * indexes are now being read from end of list
 * [0,1,2, 0 ,2,1,1]
 * i = 6, j = 5 <- end of list, pivot = 0, j value is greator than pivot so we swap and break that sub iteration
 * [0,1,2,0,2,1,1] <- j and i swapped already
 * i = 5, j = 4, pivot = 0 <- pivot is still smaller so we swap i and j again and break out of sub iteration
 * [0,1,2,0,1,2,1]
 *          ^ position of i
 * [0,1,2,1,0,2,1] we kept swapping numbers, and now pivot is greator than before
 *        ^
 * i = 3, j = 2, pivot = 1 j and pivot swap now
 * [0,1,1,2,0,2,1] i = i
 *        ^
 * 
 */
function dutchFlagPartition(a, pivotIndex){

    console.log('Original list', a)

    if(!a || pivotIndex === 0 || a.length-1 === pivotIndex)
        return
    
    let pivot = a[pivotIndex]
    // Look for smaller numbers first and you are basically grouping them together
    for(let i = 0; i<a.length; i++){
        for(let j = i+1; j<a.length; j++){
            if(a[j] < pivot){
                const temp = a[i]
                a[i] = a[j]
                a[j] = temp
                break
            }
        }
    }

    console.log(`After small numbers are put to the left of the list ${a}`)
    
     // Reverse the indexes and now you are grouping the larger numbers together after the pivot
     for(let i = a.length-1; i>=0; i--){
        for(let j = i-1; j>=0; j--){
            if(a[j] >pivot){
                const temp = a[i]
                a[i] = a[j]
                a[j] = temp
                break
            }
        }
    }
    
}

let a = [0,1,2,0,2,1,1]
dutchFlagPartition(a,1)
console.log(a)