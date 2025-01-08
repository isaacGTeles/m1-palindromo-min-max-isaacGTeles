function isPalindrome(str){
    
    str = str.toLowerCase();
    str = str.replace(/[\W_]+/g, '');

    for(let i = 0; i < Math.floor(str.length / 2); i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }

    return true;
}

function arrayMaxMin(arr){
    let min = 0, max = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            min = arr[i];
            max = arr[i];
        }else{
            if(arr[i] < min){
                min = arr[i];
            }else if(arr[i] > max){
                max = arr[i];
            }
        }
    }
    return [min, max];
}
