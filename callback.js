'use strict';

/*const posts = [
    { 'title': 'Post One', 'body' : 'This is post one'},
    { 'title': 'Post Two', 'body' : 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function removeFirstElement() {
    posts.shift();
}

function modifyThirdElement() {
    let szov = posts[2].title.replace('Three', 'Four');
    posts[2].title = szov;
}

function createPost(post, callback_1, callback_2, callback_3) {
    setTimeout(() => {
        posts.push(post);
        callback_1();
        callback_2();
        callback_3();
    }, 2000);
}

createPost({ 'title' : 'Post Three', 'body' : 'This is post three'}, modifyThirdElement, removeFirstElement, getPosts);*/

    function placeholderAdatokMegjelenitese(callback_1){
        callback_1();
    };

    function adatokLekerese(){
        const adatok = fetch('https://jsonplaceholder.typicode.com/users');
        
        return adatok;
    }

    placeholderAdatokMegjelenitese(adatokLekerese);
    
    
