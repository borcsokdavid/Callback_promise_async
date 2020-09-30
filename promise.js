'use strict'

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}





function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            }
            else{
                reject('Valami elromlott');
            }
            
        },2000);
    })
    
    
}

getPosts();


createPost({title: 'Post Three', body: 'This is post three'})
        .then(getPosts)
        .catch(error => console.log(error));


const Promise2 = fetch('https://jsonplaceholder.typicode.com/users')
    .then((resolve) => resolve.json());
Promise2.then(
    function megjelenit(values){
        let tablazat ='<table><tr><th>Név</th><th>E-mail</th></tr>'
        //console.log(values[0].name + ' ' + values[0].email);
        tablazat += `<tr><td>${values[0].name}</td><td>${values[0].email}</td></tr>`
        tablazat += '</table>'
        document.getElementById('tablazat').innerHTML = tablazat;
    }
);