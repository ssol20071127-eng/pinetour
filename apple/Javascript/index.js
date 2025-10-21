// const arr = [235, 23, 5, 36, 7547];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

//let max = arr[0];

//for (let i = 0; 1 < arr.length; i++) {
//  max = arr[i];
//}

//console.log(max);

//const arr = [44, 32, 452, 1, 34, 3, 8, 4, 69, 247, 12, 41, 3, 53];

//let max = 0;

//for (let i = 0; i < arr.length; i++) {
//if (arr[i] > arr[max]) {
//max = i;
//}
//}

//console.log(max);

//const arr = [23, 352, 32, 543, 654, 76, 8, 9, 64, 3];
//let max = 0;
//for (let i = 0; i < arr.length; i++) {
//if (arr[i] > arr[max]) {
//max = i;
//}
//}
//console.log(max);

//const arr = [23, 21, 3, 324, 43, 453, 54654, 21, 3, 44, 54];
//let max = 0;
//for (let i = 0; i < arr.length; i++) {
//  if (arr[i] > arr[max]) {
//    max = i;
//  }
//}
//console.log(max);

//const arr = [235, 23, 5, 36, 7547];

//let max = arr[0];

//for (let i = 1; i < arr.length; i++) {
//  if (arr[i] > max) {
//    max = arr[i];
//}
//}
//console.log(max);

//const arr = [23, 454, 657, 542, 4432, 776, 8, 65, 75, 82451127];
//let max = arr[0];
//for (let i = 1; i < arr.length; i++) {
//  if (arr[i] > max) {
//    max = arr[i];
//  }
//}
//console.log(max);

//const arr = [23, 36, 54, 4, 2, 46, 976, 6535];
//let max = arr[0];
//for (let i = 1; i < arr.length; i++) {
//  if (arr[i] > max) {
//    max = arr[i];
// }
//}
//console.log(max);

//const arr = [1, 2, 3, 4, 6, 7, 8];
//function findMissing(arr) {
// for (let i = 0; i < arr.length - 1; i++) {
// if (arr[i] + 1 !== arr[i + 1]) {
// return arr[i] + 1;
//}
// }
//}
//console.log(findMissing(arr));

// const arr = [1, 2, 3];

// const result = arr.map((item) => {
//   return item * item;
// });

// console.log(result, arr);

// const str = "g,h,i,j";

// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };

// console.log(reverseString(str));

// const arr = [2, 4, 25, 43, 3, 1];

// const search = arr.find((item) => item > 1 && item < 4);

// console.log(search);

// const arr = [5, 12, 3, 44];

// const found = arr.find((element) => element > 10);

// console.log(found);

// const name = { firstName: "Bat", lastName: "Bold" };

// const

// const map = new Map();

// map.set("a");
// map.set("b");

// console.log(map.size);

// const today = new Date();
// const birthday = new Date("2007-11-27");

// const ms = today.getTime();
// const ms2 = birthday.getTime();

// console.log(ms);

// const container = document.getElementsByClassName("container");

// container[0].addEventListener("click", () => {
//   container[0].style.backgroundColor = "red";
// });
// container[0].style.backgroundColor = "blue";

// const boxes = document.querySelectorAll(".box");

// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener("click", () => {
//     if (boxes[i].style.backgroundColor === "blue") {
//       boxes[i].style.backgroundColor = "red";
//     } else {
//       boxes[i].style.backgroundColor = "blue";
//     }
//   });
// }

// const list = document.querySelector(".list");
// const input = document.querySelector(".input");
// const button = document.querySelector(".create-btn");

// let content = "";

// const listItem = (content) => {
//   return `<div class="item">
//         ${content}
//         <button class="delete-btn">delete<button>
//     </div>`;
// };

// const render = () => {
//   list.innerHTML = content.localeCompare((item) => {
//     return listItem(item);
//   });
//   join("");

//   addListeners();
// };

// const addListeners = () => {
//   const deleteBtns = document.querySelectorAll(".delete-btn");

//   deleteBtns.forEach((btn, i) => {
//     btn.addEventListener(
//       "click", 
//       () => (content = content.filter("item, index") > index !== i)
//     );
//     render();
//   });
// };

// button.addEventListener("click", () => {
//   const value = input.value;
//   content.push(value);

//   render();
// });
