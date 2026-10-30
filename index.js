



//toogle between light and dark mode
// let body = document.querySelector("body");
// let btn=document.querySelector("#btn");
// let mode="light";
// btn.addEventListener("click", ()=> {
// if(mode=="light"){
//     mode="dark";
//     body.style.backgroundColor="black";
// }else{
//     mode="light";
//     body.style.backgroundColor="white";
// }console.log(mode);
// });


//practice: 2
// let intro=document.querySelector(".para");
// let newc=document.querySelector(".newclass");
// intro.classList.add("newclass");
// intro.append(newc);

//practice: 1
// let button=document.createElement("Button");
// button.innerText="Click Me!";
// button.style.backgroundColor="red";
// button.style.color="white";
// let body=document.querySelector("body");
// body.prepend(button);

// let name = document.querySelector(".Myclass");
// console.log(name.setAttribute("class","Newclass"));

// console.log(name.style);

// let newp = document.createElement("p");
// newp.innerText="Hi, I'm new";
// console.log(newp);

// let old = document.querySelector(".Myclass");
// old.append(newp);

// let but = document.createElement("Button");
// but.innerText = "Click here!";
// console.log(but);
// old.before(but);
// but.remove();
// old.removeChild();

// let divs=document.querySelectorAll(".Myclass");
// let idx = 1;
// for(val of divs){
//     val.innerText = `This is my div: ${idx}`;
//     idx++;
// }
// console.log(setAttribute("class","newClass"));


// let heading = document.querySelector("h2");
// heading.innerText = heading.innerText + "from apna college";
// console.log(heading.innerText);

// let n = prompt("Enter a number: ");
// let arr = [];
//  for(let i=1; i<=n;i++){
// arr[i-1] = i;
// }
// console.log(arr);
// let sum = 0;
// let output = arr.reduce((val,sum) => {
//     return val + sum;
// })
// console.log(output);

// let op = arr.reduce((val, product) => {
//     return val * product;
// })
// console.log(op);


// let marks = [67,92,99,50,45];
// let output = marks.filter((score) => {
//     return score > 90;
// })
// console.log(output);


// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log("Square of each value is: ", val**2);
// })


// let str = [1,2,3,4];
// str.forEach(function func(val,idx){
//     console.log(val,idx);
// })


// const vowels = (str) => {
//    count = 0;
//    for(let key of str){
//     if(key =='a' || key =='e' || key =='i' || key =='o' || key =='u'){
// count++;
//     }
//    }
//    console.log(count);
// }
// vowels("Fatima");


// function vowels(str){
//     let count =0;
//     for(let key of str){
//         if(key==="a" || key==="e" ||key==="i" || key==="o" || key==="u"){
// count++;
//     }
//     }
//      console.log(key);
// }
// vowels("Fatima");


// let items = [250,645,300,900,50];
// let offer;
// for(let val of items){
//     offer = val/10;
//     val = val - offer;
// console.log(`Here is the 10% off offer for items: ${val}`);
// }

// let offer;
// for(let i =0;i<items.length;i++){
// offer = items[i]/10;
// items[i] = items[i]-offer;
// }
// console.log(items);


// let name = prompt("Enter your name: ");
// console.log(`@ ${name} ${name.length}`);
// console.log("@" + name + name.length);
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let num = prompt("Enter Random Number: ");
// let guess = prompt("Guess a Number: ");

// while(num !==guess){
//     let guessAgain = prompt("You've guessed a wrong number \n Try again!");

// }
// console.log("Congratulations!");

// let sum=0;
// let marks = [85,97,44,37,76,60];
// for(let i = 0; i<marks.length; i++){
//   sum+=i;
 
// }
//  avg = sum/marks.length;
// console.log(avg);

