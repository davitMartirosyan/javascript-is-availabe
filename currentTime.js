const app = document.querySelector(".app");
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();

const today = weekDays[date.getDay() - 1];
const time = date.getHours() > 12 ? "PM" : "AM";
const getTime = `
    ${date.getHours()} ${time} : ${date.getMinutes()} : ${date.getSeconds()}
`;

app.innerHTML = `
    Sample Output : Today is ${today} <br>
    Current Time : ${getTime}
`;
