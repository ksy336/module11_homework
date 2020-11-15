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

// Задание выполнено неверно, есть несколько недочетов:
// 1. Не подсчитывается количество четных\нечетных элементов и нулей. Для правильного подсчета нужно использовать цикл и переменные-счетчики. А также проверить элементы на тип, чтобы учитывать только числа, а остальные отсеивать
// 2. Массив нужно передавать в функцию в качестве аргумента, не задавать в теле функции. Иначе теряется основной смысл использования функций - универсальность. В текущем виде функция работает только с одним конкретно заданным массивом, в неё нельзя передать другой, не меняя сам код функции.
// Ниже написала верный вариант решения

function countEvenOdd(arr) {
    let even = 0, odd = 0, zero = 0;

    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }

    console.log(`Четных элементов - ${even}`);
    console.log(`Нечетных элементов - ${odd}`);
    console.log(`Нулей - ${zero}`);
}

let array = [5, 8, 13, 21, 0, 0, null, NaN, undefined, '48', true, false];

countEvenOdd(array);
