const  post = [
    {title: "Post One", body: "first post"},
    {title: "Post Two", body: "second post"},
];
(getPost = function(){
    setTimeout(() => {
        let output = "";
        post.forEach((p, index) => {
            output +=  `<li>${p.title} -> ${p.body}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
})();

function createPost(p){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            post.push(p);
            const err = false;
            if(!err)
                resolve();
            reject();
        });
    })
}

createPost({title: "Post Three", body:"Third Post"})
    .then(getPost)
    .catch(err => err);


const promise1 = Promise.resolve("Hello World");
const promise2 = Promise.resolve("Hello World 2");
const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 50, "Goodbye"));
Promise.all([promise1, promise2, promise3])
    .then((r) =>{
        console.log(r)
    })
