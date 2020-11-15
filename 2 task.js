
function simpleNum(num) {
    let flag = true;

    switch(num){
        case 0 :
            console.log('It is 0.Try again.');
            return;
        case 1 :
            console.log('It is 1. Try again.');
            return;
        default:
            if (num > 1000){
                console.log('The number is too big. Try again.');
                return;
            } else {
                for (let i = 2; i < num; i++) {
                    if(num % i == 0) {
                        flag = false;
                        break;
                    }
                }
            }
    }
    if (flag) {
        console.log('Entered number is a simple number.');
    } else {
        console.log('Entered number is not a simple number.');
    }

}


simpleNum(25);

// В целом всё сделано верно, но есть несколько замечаний:
// 1. В случае с 0, 1 и числами больше 1000 можно сразу выходить из функции после вывода сообщения, т.к. уже нет смысла перебирать делители и совершать дальнейшие действия
// 2. После выполнения пункта 1 можно упростить условие при выводе результата в консоль в конце функции
// Исправила всё вышеперечисленное в коде