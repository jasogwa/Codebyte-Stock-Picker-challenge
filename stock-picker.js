ArrayChallenge = (arr) => { 

    var max = -1;
    var min = arr[0];
  
    // code goes here  
    for(var i=1; i<arr.length; i++){
      
      if(arr[i] - min > max) {
        max = arr[i] - min;
      }
  
      if(arr[i] < min) {
        min = arr[i]
      }
    }
    
    return max; 
  
}
     
// keep this function call here 
console.log(ArrayChallenge(readline()));