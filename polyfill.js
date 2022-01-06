function Item(args){
    this.name = args[0];
    this.price = args[1];
    this.description = `${this.name}+ $${this.price}`
}
function Fruit(args){
    Item.call(this, args);
}

function Car(args){
    Item.call(this, args);
}

const Banana = new Fruit(["Banana", "4.75"]);
console.log(Banana.description);

const car = new Car(["Mercedes Benz", "180000"]);
console.log(car.description)


const arr1 = [1,2,3];
const arr2 = [4,5,6];
arr1.push.apply(arr1, arr2);

const matrix = [
    ["o", "o", "o"],
    ["x", "x", "x"],
    ["o", "x", "o"]
];



const obt = {
    name: "Davit",
    getName: function(){
        console.log(this.name);
    }
}

const getTheName = obt.getName.bind(obt);
window.setTimeout(getTheName,1000);