const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement (arr, index) {
    arr.splice(index-1, 1)
    console.log(arr);
    return
}
removeElement(array, 5 );

// Результат: [1, 2, 3, 4, 6, 7]