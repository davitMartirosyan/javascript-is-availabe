const btns = document.querySelectorAll(".func");
const nums = document.querySelectorAll(".n");
const summary = document.querySelector(".summary");
btns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        let role = btn.dataset.role;
        if(role == "m"){
            summary.innerHTML = nums[0].value * nums[1].value;
        }
        if(role == "d"){
            summary.innerHTML = nums[0].value / nums[1].value;
        }

    })
})