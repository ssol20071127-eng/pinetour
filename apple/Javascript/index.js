// const arr = [235, 23, 5, 36, 7547];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

const arr = [44, 32, 42, 1, 34, 3, 8, 4, 69, 247, 12, 41, 3, 53];

let maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }
}

//let max = arr[0];

//for (let i = 0; 1 < arr.length; i++) {
//  max = arr[i];
//}

//console.log(max);


