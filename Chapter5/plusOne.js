/**
 * Takes arr as input which has array of numbers that represent a number when combined and you need to add one and return it as array
 * 
 * here is a brute force approach where I convert a number from array and add and then put back into array. Here we could run into issue 
 * where if we go outside of max integer limit there will be an issue with adding numbers and thus the result being not accurate
 * @param {number []} arr
 * @returns number [] 
 */

const { isEmpty } = require("lodash");

function plusOne(arr){
    if(isEmpty(arr)){
        return arr
    }

    let num = Number(arr.toString().replaceAll(",",""))
    num+=1
    
    let res = []
    for(let c of num.toString()){
        res.push(Number(c))
    }
    return res
}

/**
 * Similar to plusOne function above but we want to operate on numbers directly to not run into issue
 * we use the technique of adding one number to next to it and then if number is greator than 9 then we carry the remainder to next number and move backwards
 * we start from end of the list
 * if we run out of index and we still have remainder we want to make new position in beginning and keep going until remainder is 0
 * @param {number []} arr 
 * @returns number [] 
 * 
 * [1,2,9]
 *      ^ 
 *  9 + 1 = 10
 * [  3 0]
*/
function plusOne2(arr){

    let start = 0
    let end = arr.length-1

    let remainder = 0

    while(start < end) {

        let currentNum = arr[end] + remainder
        if(end == arr.length-1){
            currentNum+=1// in beginning of add it needs to add 1
        }
        if(currentNum >= 10){
            remainder = Math.floor(currentNum / 10)
            arr[end] = currentNum % 10 // last digit of sum
        } else {
            remainder = 0
            arr[end] = currentNum
        }
        end--
        if(start === end && remainder > 0){
            arr[start] = currentNum % 10
            arr.unshift(remainder)
        }
    }

    return arr
}

/**
 * This is variant of plusOne but it adds two numbers together in place and returns sum
 * assuming the number size is same
 * @param {number []} arr1 
 * @param {number []} arr2
 * @returns number [] 
 * 
 * [1,9,3]
 * +
 * [1,1,1]
 * 
 * [3  0  4]
 */
function plusN(arr1,arr2){
   
    let res = []
    let remainder = 0
    for(let i = arr1.length-1; i>=0; i--){
        let currentNum = arr1[i] + arr2[i] + remainder
        if(currentNum >= 10){
            remainder = currentNum % 10
            res.unshift(Math.floor(currentNum/10))
        }else {
            remainder = 0
            res.unshift(currentNum)
        }
        if(remainder > 0 && i == 0){
            res[0] = (remainder)
            res.unshift(Math.floor(currentNum/10))
        }
    }
    return res

}
const res = plusN([3,1,2],[1,9,9])
console.log(res)