

function func(i, j, a, b) {
    setTimeout(function () {
        for (let k = 0; k < sizOfArray; k++) {

            if (k !== i) {
                span[k].style.backgroundColor = 'cyan';
            }

        }
        span[i].style.backgroundColor = 'red';
        span[j].style.backgroundColor = 'blue';
        setTimeout(function () {
            span[i].style.height = a * 4 + 10 + 'px';
            span[j].style.height = b * 4 + 10 + 'px';

        }, changedelay);
    }, delayInMilliseconds);
}
const bubbleSorting = function () {
    delayInMilliseconds = 0;
    for (let i = 0; i < sizOfArray-1; i++) {
        for (let j = 0; j < sizOfArray-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
                delayInMilliseconds += increment;
                func(j, j+1, arr[j], arr[j+1]);
            }
        }
    }
    setTimeout(function () {
        for (let i = 0; i < sizOfArray; i++) {
            span[i].style.backgroundColor = 'cyan';
        }
        enabling();
    }, delayInMilliseconds + increment);
}
