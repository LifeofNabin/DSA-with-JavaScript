Problems:
function Reversearray(arr) {
  let Newarr = [];
  let start = 0;
  let end = arr.length - 1;

  while (end >= 0) {
    Newarr[start] = arr[end];
    start++;
    end--;
  }
  return Newarr;
}
const arr = [10, 20, 25, 32];
const ans = Reversearray(arr);
console.log("original array\t" + arr);
console.log("Reversed array\t" + ans);
