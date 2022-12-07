function swap(arr, i, j) {
    let middle = arr[j];
    arr[j] = arr[i];
    arr[i] = middle;
}