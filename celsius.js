const t = document.querySelectorAll(".t");
const siblings = Array.prototype.slice.call(t);
let time;

function getTemperature(temperature){
    formulas = {
        F: (temperature - 32) * (5/9), // Celsius => Fahrenheit
        C: temperature * (9/5) + 32  // Fahrenheit => Celsius
    }
    return formulas;
}

console.log(siblings)
t.forEach(check => {
    check.addEventListener("keyup", (e)=>{
        check.classList.add("active");
        const val = e.target.value;
        const type = e.target.dataset.role.toUpperCase();
        for(let i = 0; i < siblings.length; i++){
            if(!siblings[i].classList.contains("active")){
                if(val.length == 0)
                    siblings[i].value = "";
                else
                    siblings[i].value = getTemperature(val)[type];
            }
        }
        check.classList.remove("active");
    })
})