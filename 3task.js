function getNum1(num1){

    return function getNum2(num2){

        return num1 + num2;
    };
}


const resultFunc = getNum1(10);
console.log(resultFunc(20));