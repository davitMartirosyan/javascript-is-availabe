
const arr = [1,2,3,4,5,6,7,8,9];
// sum all items in the array
Array.prototype.sumEveryItem = function(index){
    if(index > this.length) return false;
    let sum = 0;
    const s = (index) => {
        if(index >= this.length){
            this.unshift({summary: sum});
            return this;
        }
        if(typeof this[index] != "number"){
            return s(index+1);
        }
        sum += this[index]
        return s(index+1);
    }
    return s(index);
}
function hash(length){
    const alpha = ["abcdefghijklmnopqrstuvwxyz"];
    let key = "";
    function random(){
        if(key.length >= length){
            return key;
        }
        const randomSymbol = Math.floor(Math.random() * alpha[0].length);
        key += alpha[0][randomSymbol];
        return random();
    }
    return random();
}
//left shift bits formul x * (2 ** y) when x is my number and y is how much time is should 
//wipe forward to the left
let ips = [255,255,0,0];
var ipv4 = [];
for(ip of ips){
    ipv4.push(+function (){
        return ip.toString(2)
    }());
}

///////////////////////////// 0b10000000 to decimal

// read     100 - 4
// write    010 - 2
// execute  001 - 1
// rwx      111 - 7

/////////////////// Palindrom ///////////////////////////////

function palindrom(inputString) {
    let fromRight = inputString.length-1;
    let i = 0;
    while(i <= Math.floor((inputString.length - 1) / 2)){
        if(inputString[i] != inputString[fromRight]){
            return false;
        }
        console.log(inputString[i], inputString[fromRight]);
        i++;
        fromRight--;
    }
    return true;
}

////////////////////the largest product//////////////////////////

function largestProduct(inputArray){
    let a = 0;
    let b = [];
    while(a < inputArray.length - 1){
        b.push(inputArray[a]*inputArray[a+1]);
        a++;
    }
    return Math.max(...b);
}


/////////////////////////Shape Area///////////////////////////////

function shapeArea(n) {
    let c = 4;
    let a = 1;
    let b = 1;
    if(n == 1)
        return 1;

    while(a < n){
        b += c
        c += 4;
        a++;
    }
    return b;
}

/////////////////Statues of Different Sizes///////////////////////////////

function sequence(statues) {
    let i = 0;
    let allPossiblenumbers = [];
    statues.sort(function(a, b){return a - b});
        while(i <= statues.length){
        let left = statues[i];
        let right = statues[i+1];
        while(left < right){
            allPossiblenumbers.push(left);
            left++;
        }
        i++;
    }
    allPossiblenumbers = allPossiblenumbers.filter(function(item){
        return !statues.includes(item)
    })
    return [allPossiblenumbers.length, statues, {forgottendNumbers: allPossiblenumbers}]
}

console.log(sequence([2,3,6,8]))
