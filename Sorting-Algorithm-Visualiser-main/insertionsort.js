
function func3(j, key, x) {
    delayInMilliseconds += increment;
    setTimeout(function () {
        for (let i = 0; i < sizOfArray; i++) {
            span[i].style.backgroundColor = 'cyan';
        }

        span[j + 1].style.backgroundColor = 'red';
        span[j].style.backgroundColor = 'blue';
        setTimeout(function () {
            span[j].style.height = key * 4 + 10 + 'px';
            span[j+1].style.height = x * 4 + 10 + 'px';

        }, changedelay);
    }, delayInMilliseconds);
}
function insertionSort() {
    let i, key, j;
    for (i = 1; i < sizOfArray; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            func3(j, key, arr[j]);
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
const insertionSorting = function () {
    delayInMilliseconds = 0;
    insertionSort();
    setTimeout(function () {
        for (let i = 0; i < sizOfArray; i++) {
            span[i].style.backgroundColor = 'cyan';
        }
        enabling();
    }, delayInMilliseconds + increment);
}