const message =  document.querySelector(".message");
const addNumber = document.querySelector(".addNumber");
function randomAccess(n){
    if(!n){
        return false;
    }
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const random = Math.floor(Math.random() * nums.length);

    if(n == nums[random]){
        message.classList.add("success");
        message.innerHTML = "You Win :)";
    }else{
        message.classList.add("fail");
        message.innerHTML = "You Lose :(";
    }
    return [parseInt(n), nums[random]];
}

addNumber.addEventListener("click", (e)=>{
    message.classList.remove("success");
    message.classList.remove("fail");
    const p = prompt("Please write a number between 1 and 10");
    const returnedValue = randomAccess(p);
    e.target.innerHTML = "Try Again";
    console.log(returnedValue);
});

