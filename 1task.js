function getNum(){
    let arr = [1, 3, 6, 5, 0, '1', 'love'];
    let i = 0;
    let j = 0;
    let k = 0;

    function isNull(i){
        return i === null;
    };
    function isNaN(i){
        return i !== i;
    };


    if (i == 0){
        console.log(arr[i]);
        i++;

    } else if (j % 2 == 0){
        console.log(arr[j]);
        j++;
    } else if (k % 2 != 0){
        console.log(arr[k]);
        k++;
    }
}



getNum(3);
