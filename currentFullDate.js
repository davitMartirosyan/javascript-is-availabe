const app = document.querySelector(".app");
const date = new Date();
const dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
const mm = (date.getMonth() + 1) < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1;
const yyyy = date.getFullYear();

const fullDate = `${mm}-${dd}-${yyyy}`;
app.innerHTML += fullDate;