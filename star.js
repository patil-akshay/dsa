/*
 *
 * *
 * * *
 * * * *
 */

 for(let i=0; i<5; i++){
    let row = '';
    for(let j=0; j<i; j++){
        row = row + ' ' + '*'
    }
    console.log(row);
}

/*
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
*/

for(let i=0; i<5; i++){
    let row = '';
    for(let j=0; j<5; j++){
        row = row + ' ' + '*'
    }
    console.log(row);
}


/* 
 * * * * *
 * * * *
 * * *
 * *
 *
 */

 let n = 5
for(let i=0; i<n; i++){
    let row = '';
    for(let j=0; j<n-i; j++){
        row = row + ' ' + '*'
    }
    console.log(row);
}


/*
1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
*/

let n = 5

for (let i = 0; i < n; i++) {
    let row = '';
    let sw = 1;
    for (let j = 0; j <= i; j++) {
        row = row + ' ' + sw;
        if (sw == 1) {
            sw = 0;
        } else {
            sw = 1;
        }
    }
    console.log(row);
}


/*
    *
   **
  ***
 ****
*/

let n = 5
for(let i=0; i<n; i++){
    let row = '';
    for(let k=0; k<n-i;k++){
        row = row + ' ';
    }
    for(let j=0; j<i; j++){
        row = row + '*'
    }
    console.log(row);
}
