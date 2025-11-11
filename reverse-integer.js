// Postive Number
let n = 1214;
let rev = 0;

while(n > 0){
    let rem = n % 10; // last digit
    rev = ( 10 * rev ) + rem;
    n = Math.floor(n/10); // remove last digit
}

console.log(rev);

/* Edge cases 
Negative number -> Math.abs(n) make it absolute on return if original is negative return -rev
*/

let n = -1214;
let ncopy = n;
n = Math.abs(n)
let rev = 0;

while(n > 0){
    let rem = n % 10; // last digit
    rev = ( 10 * rev ) + rem;
    n = Math.floor(n/10); // remove last digit
}

let limit = Math.pow(2,31);
if(rev < -limit || rev > limit) return 0;
console.log(ncopy < 0 ? -rev : rev);
