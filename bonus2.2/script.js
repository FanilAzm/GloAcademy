function getResult(a,b){
    let result;
    result = a ** b;
    result.toString().split('').reduce(function(result, val){
        return result + +val;
    }, 0);
    return result;
  }
  
  console.log(getResult(3, 10));