var x = [5, 10, 15];
function modify(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 5;
    }
    return arr;
}
console.log(modify(x));