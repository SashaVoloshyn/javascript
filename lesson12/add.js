// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const user of users) {
            let userCard = document.createElement('div');
            userCard.classList.add('userCard');
            let address = user.address;
            let geo = address.geo;
            let company = user.company;
            userCard.innerHTML =
                `<h3> Id : ${user.id}</h3> 
                 <h3> Name : ${user.name}</h3> 
                 <h3> Usernam : ${user.username}</h3> 
                 <h3> Email : ${user.email}</h3>
                 <h3>Adress:</h3> 
                 <h4>Street : ${address.street}</h4>
                 <h4>Suite : ${address.suite}</h4>
                 <h4>City : ${address.city}</h4>
                 <h4>Zipcode : ${address.zipcode}</h4>
                 <h4>Geo : </h4>
                 <h5>Lat : ${geo.lat}</h5>
                 <h5>Lng : ${geo.lng}</h5>
                 <h3> Phone : ${user.phone}</h3>
                 <h3> Website : ${user.website}</h3>
                 <h3>Company :</h3>
                 <h4>Name : ${company.name}</h4>
                 <h4>CatchPhrase : ${company.catchPhrase}</h4>
                 <h4>Bs : ${company.bs}</h4>
                 
`;

            let buttonDiv = document.createElement('div');
            let button = document.createElement('button');
            button.innerText = 'Click me';
            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts =>{

                        for (const post of posts) {
                            let card = document.createElement('div');
                            card.classList.add('card');
                            card.innerHTML = `<h2>ID: ${post.id}</h2> <h3>Title: ${post.title}</h3> <p><strong>Body:</strong> ${post.body}</p>`;

                            userCard.append(card);
                        }
                        button.disabled = true;




                    });

            };


                buttonDiv.append(button);
            userCard.append(buttonDiv);
            wrap.append(userCard);


        }
        document.body.append(wrap);
    });