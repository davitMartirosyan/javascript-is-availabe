const p = document.querySelector(".leftDays");
const d = new Date();
const month = d.getMonth();
const DaysLeft = `<p class="red">${countofAllDays(countMonths(month))}</p> <p class="green">Days Left</p> `;
p.innerHTML = DaysLeft;

function daysOfMonth(mm){
    const date = new Date();
    const d = new Date(date.getFullYear(), mm + 1, 0).getDate();
    return {daysLeft: d - date.getDate(), daysInMonth: d};
}

function countMonths(mm){
    const d = new Date();
    const allDays = [];
    let i = 0;
    const month = d.getMonth() + 1;
    while(mm < month){
        allDays[i] = daysOfMonth(mm);
        i++;
        mm++;
    }
    return allDays;
}

function countofAllDays(allDays){
    let i = 0;
    let sum = 0;
    while(i < allDays.length){
        sum += allDays[i].daysLeft;
        i++;
    }
    return sum;
}