
function timer (n, lastNum){
    const intervalId = setInterval(function(){
        if (n <= lastNum){
            console.log(n);
            n++

        } else { // здесь условие можно упростить
            clearInterval(intervalId);
        }

    }, 1000)};

timer(5, 15);