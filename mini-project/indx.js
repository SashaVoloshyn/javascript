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
            userCard.innerHTML =
                `<h3> <span>Id :</span> ${user.id}</h3> 
                 <h3> <span>Name :</span> ${user.name}</h3>`

            let userButton = document.createElement('button');


            userButton.classList.add('btn');
            userButton.innerText = 'click me';
            userButton.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user));
                window.location = 'user-details.html';

            };


            userCard.appendChild(userButton);
            wrap.append(userCard);
        }

        document.body.appendChild(wrap);
    })
