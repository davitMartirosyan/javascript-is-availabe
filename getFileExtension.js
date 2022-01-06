// function getExtesntion(filename) {
//     const split = filename.split(".");
//     return `.${split[split.length-1]}`;
// }


function getExtesntion(filename){
    let f = filename.length;
    let extension = "";
    while(filename[f] != "."){
        if(f == 0){
            extension = `{ ${filename} } is not a file`;
            return extension;
        }
        f--;
    }
    while(filename[f]){
        extension += filename[f];
        f++;
    }
    return extension;
}
console.log(getExtesntion("hello"))

//13