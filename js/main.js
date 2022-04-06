// Problem 1

// let massArray = [10, 1, 3, 5, 8, 9];

// for(let i = 0; i < massArray.length; i++){
//   for(let j = 0; j < massArray.length; j++){
//     if(massArray[j] > massArray[j + 1]){
//       let a = massArray[j + 1];
//       massArray[j + 1] = massArray[j];
//       massArray[j] = a;
//     }
//   }
// }

// console.log(massArray);

// Problem 2

// let object = [
//   {
//     login : "uzb",
//     pass : "forever123",
//   }
// ];

// object.forEach((item) => {
//   if(item.login.trim().length < 3 && item.pass.trim().length < 8){
//     console.log("Login kamida 3 belgidan iborat bo'lishi kerak");
//     console.log("Parol kamida 8 belgidan iborat bo'lishi kerak");
//   }
//   else if(item.login.trim().length < 3){
//     console.log("Login kamida 3 belgidan iborat bo'lishi kerak");
//   } else if(item.pass.trim().length < 8){
//     console.log("Parol kamida 8 belgidan iborat bo'lishi kerak");
//   } else{
//     console.log(`Siz muvaffaqqiyatli ro'yxatdan o'tdingiz \n Login: ${item.login} \n Parol: ${item.pass}`);
//   }
// });

// Problem 4

// let n = 10;
// let k = 2;
// let count = 0;

// for(let i = 1; i <= n; i++){ 
//   if(i > 1){
//     let sum = 1;
//     for(let j = 0; j < k; j++){
//       sum *= i;
//     }
//     count += sum;
//   } else if(i == 1){
//     count += i;
//   }
// }

// console.log(count);


// let masArray = [7, 10, 3, 2];
// let arr = "";
// for(let i = 0; i < 2; i++){
//   masArray.push(masArray[i])
//   masArray.shift(masArray[i])
// }
// console.log(masArray); 


// Problem 6

// let masArray = [7, 10, 3, 2];
// let arr = Math.floor(masArray.length / 2);
// let count = arr;

// for(let i = 0; i < arr; i++){
//   let sum = masArray[i];
//   masArray[i] = masArray[count];
//   masArray[count] = sum;
//   count++;
// }

// console.log(masArray);

//Problem 5

// let elArr = [1, [2, 3], undefined, {x: 1}];
// let elNewArr = [];

// for(let i = 0; i < elArr.length; i++){
//   if(Number.isInteger(elArr[i])){
//     elNewArr.push(elArr[i]);
//   } else if (Array.isArray(elArr[i])){
//     elArr[i].forEach((item) => {
//       elNewArr.push(item);
//     })
//   } else if(typeof elArr[i] === "object"){
//       elNewArr.push(Object.keys(elArr[i])[0]);
//       elNewArr.push(Object.values(elArr[i])[0]);
//   } else{
//     elNewArr.push(elArr[i]);
//   }
// }

// console.log(elNewArr);


const eye = document.getElementById("eye");
const form = document.querySelector(".form__box");
const input = document.getElementById("input");
const left = document.getElementById("left");
const list = document.getElementById("list");
const x = document.getElementById("x");
const elForm = document.querySelector(".form");

eye.addEventListener("click", (e)=> {
  e.preventDefault();
  form.style.backgroundColor = "#fff";
  left.style.color = "#000";
  eye.style.color = "#000";
  input.style.color = "#000";

});

form.addEventListener('keydown', ()=>{
  let val = input.value;
  let symbol = '@';
  list.style.display = "block";
  let text = list.textContent
  if (val.length > 8){
    x.className = `bx bx-check`;
  } 
})