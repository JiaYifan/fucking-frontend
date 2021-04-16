var array = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];

function quick_sort(array, left, right) {
  if (right - left <= 0) return;
  let i = left,
    j = right,
    k = i,
    v = array[k];
  while (i < j) {
    if (i === k) {
      if (v > array[j]) {
        array[i] = array[j];
        array[j] = v;
        k = j;
        i++;
      } else {
        j--;
      }
    } else if (j === k) {
      if (v < array[i]) {
        array[j] = array[i];
        array[i] = v;
        k = i;
        j--;
      } else {
        i++;
      }
    }
  }
  quick_sort(array, left, k - 1);
  quick_sort(array, k + 1, right);
}

quick_sort(array, 0, array.length - 1);
console.log("array: ", array);
