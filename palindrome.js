let n = 121;
let ncopy = n;
let rev = 0;

while(n > 0){
    let rem = n % 10;
    rev = ( 10 * rev ) + rem;
    n = Math.floor(n/10);
}

if(ncopy==rev) {
    console.log(true);  
} else {
    console.log(false);
}
