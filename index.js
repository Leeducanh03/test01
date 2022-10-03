// Bài 1
// let str = prompt("Mời bạn nhập vào 1 chuỗi");
// let  arr = str.split(",");

// for (let i = str.length -1; i >=0; i--){
//    arr += str[i]; 
// }
// console.log(arr);

// Bài 2
let str = "my name is Duc Anh";
let newStr = "";
newStr = newStr + str[0].toUpperCase();
for(let i = 1; i < str.length; i++){
    if(str[i] === ""){  
         newStr = newStr + str[i] + str[i+1].toUpperCase();
         i++;
    }
     else{
         newStr = newStr + str[i];
    }
}
console.log(newStr);

// Bài 5
// let info = {
//     name1 : "Lê",
//     name2 : "Văn",
//     name3 : "Luyện",  
// }
// let a = prompt("Bạn có muốn biết thêm thông tin gì không (Y/N)");

// Bài 3
// let num =[2,3,5,6,1,3,5,1,2,4,3,5,3];
// for(let i = 0; i < num.length; i++){
//      for(let j = i + 1; j < num.length; j++){
//          if(num[i]===num[j]){
//              num.splice(j,1);
//              j = j - 1;
// }
// }
// }
// console.log(num);