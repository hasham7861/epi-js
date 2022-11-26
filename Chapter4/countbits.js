/**
 * count the number of bits in the number x when it is converted to binary
 * example: x = 7 -> 0111 which is 3 bits
 * @param {number} x 
 * @returns number
 */
function count_bits(x){
    let count = 0;

    while(x){
        count += x & 1;
        x >>=1
    }

    return count
}

console.log(count_bits(7))
