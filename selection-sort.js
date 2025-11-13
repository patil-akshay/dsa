const arr = [64, 25, 12, 22, 11];
// To get length of array
    let n = arr.length;
    
    // Variable to store index of smallest value
    let min;
    
    // variables to iterate the array
    let i , j;
  
    for( i = 0; i < n-1;++i){
        min = i;
        for(j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        
        // Swap if both index are different
        if(min!=i)
        [arr[min],arr[i]] = [ arr[i],arr[min]]
    }
console.log(arr);
