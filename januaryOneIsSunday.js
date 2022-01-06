/*
2017
2023
2034
2040
2045
*/

function get1thJanuary(from, to){
    let date;
    let years = [];
    while(from <= to){
       date = new Date(`January 1 ${from}`)
        if(date.getDay() == 0){
            years.push(from);
        }
        from++;
    }
    return years;
}

const years = get1thJanuary(2014, 2050);
console.log(years);

// Նմանատիպ խնդրի լուծումը կհանգեցնի Big O(n) այսինքն լուծումը կստացվի գծային