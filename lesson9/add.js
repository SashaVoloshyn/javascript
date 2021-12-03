
    let usersList = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
    ]
    // - Є масив
    // Створити під кожен елемент окремий блок.
    // В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.
    for (const userElement of usersList) {
        let users = document.createElement('div');
        users.classList.add('user');

        let id = document.createElement('div');
        id.innerText = userElement.id;

        let name = document.createElement('div');
        name.innerText = userElement.name;

        let username = document.createElement('div');
        username.innerText = userElement.username;

        let email = document.createElement('div');
        email.innerText = userElement.email;

        let phone = document.createElement('div');
        phone.innerText = userElement.phone;

        let website = document.createElement('div');
        website.innerText = `${userElement.website}`;


        let company = document.createElement('div');
        for (const compEl in userElement.company) {
            let companyEl = document.createElement('div');
            companyEl.innerText = `${compEl}: ${userElement[compEl]}`;
            company.appendChild(companyEl);

        }

        users.appendChild(id);
        users.appendChild(name);
        users.appendChild(username);
        users.appendChild(email);
        users.appendChild(phone);
        users.appendChild(website);
        users.appendChild(company);



        document.body.appendChild(users);

    }



