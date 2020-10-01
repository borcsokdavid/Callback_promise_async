'use strict';

const posts = [
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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = true;

            if (!error) {
                resolve();
            }
            else {
                reject('Valami elromlott');
            }

        }, 2000);
    });   
}

/* createPost({ 'title' : 'Post Three', 'body' : 'This is post three'})
    .then(getPosts)
    .catch(error => console.log(error)); */

/*const promise_2 = fetch('https://jsonplaceholder.typicode.com/users')
    .then((resolve) => resolve.json());

promise_2
    .then(
        function megjelenit(values) {
            let tablazat = '<table class="text-white"><tr class="table-warning"><th>Név</th><th>E-mail</th><th>Cím</th></tr>';
            //console.log(values[0].name + ' ' + values[0].email);
            values.forEach((value) => {
                tablazat += `<tr><td class="bg-primary">${value.name}</td><td class="bg-warning">${value.email}</td><td class="bg-info">${value.address.street},${value.address.city}</td></tr>`;
            })
            
            tablazat += '</table>';
            document.getElementById('tablazat').innerHTML = tablazat;
        }
    );*/

    async function placeholderAdatokMegjelenitese(){
        const adatok = await fetch('https://jsonplaceholder.typicode.com/users');
        const ertekek = await adatok.json();


        function megjelenit(values) {
            let tablazat = '<table class="text-white"><tr class="table-warning"><th>Név</th><th>E-mail</th><th>Cím</th></tr>';
            //console.log(values[0].name + ' ' + values[0].email);
            values.forEach((value) => {
                tablazat += `<tr><td class="bg-primary">${value.name}</td><td class="bg-warning">${value.email}</td><td class="bg-info">${value.address.street},${value.address.city}</td></tr>`;
            })
            
            tablazat += '</table>';
            document.getElementById('tablazat').innerHTML = tablazat;
        }
        megjelenit(ertekek);

    }

    placeholderAdatokMegjelenitese();

    