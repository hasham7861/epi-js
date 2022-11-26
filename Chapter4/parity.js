/**
    @description Returns 0 if even number of 1s in number are even else odd
    example: x = 5 which 0 0101 -> 0

    0101 = 5
     &
    0001 = 0001  = 0001
    
    0010 = 2
    &
    0001 = 0001 ^ 0001 = 0001

    0001 = 1
    &
    0001 = 0001 ^ 0001 = 0000
    
    x=0 end of loop
    

    x = 7 which is 0111 -> 1
    
  7  0111 & 0001 = 0001
    
  3  0011 & 0001 = 0001
    
  1  0001 & 0001 = 0001 = ans = 1

  x = 0 end of loop

    @param {number} x - string in binary number
    @returns {number}
*/
function parity(x){

    let ans = 0;

    while(x){
        ans ^= x & 1;
        x >>= 1;
    }

    return ans;
}

console.log(parity(7))
