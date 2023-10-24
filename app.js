function pushVal(arr,num){
    arr.push(num);
    console.log(arr);
    return arr;
}

pushVal([7,8,9], 10);

function spliceArr(arr){
    arr.splice(7,9,"was replaced");
    console.log(arr);
    return arr;
}

spliceArr([7,8,9,10])

function sliceArr(arr){
    var sliced=arr.slice(7,9);
    console.log(sliced);
    return sliced;
}

sliceArr([2,4,6,8,10])