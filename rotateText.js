const app = document.querySelector(".app");
var text = "w3resource";
let i = text.length - 1;
let newString = "";
while(i >= 0){
    newString += text[i];
    i--;
}

console.log(newString)