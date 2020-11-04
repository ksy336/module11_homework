
function simpleNum(num) {
    let flag = true;

    switch(num){
        case 0 :
            console.log('It is 0.Try again.');
            break;
        case 1 :
            console.log('It is 1. Try again.');
            break;
        default:
            if (num > 1000){
                console.log('The number is too big. Try again.');
                break;
            } else {
                for (let i = 2; i < num; i++) {
                    if(num % i == 0) {
                        flag = false;
                        break;
                    }
                }
            }
    }
    if((flag == true) && (num !=0) && (num != 1)) {
        console.log('Entered number is a simple number.');
    } else if (flag == false){
        console.log('Entered number is not a simple number.');
    }

}


simpleNum();