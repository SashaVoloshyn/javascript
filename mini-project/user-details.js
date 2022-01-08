let userDetails = JSON.parse(localStorage.getItem('user'));
let wrapUser = document.createElement('div');
wrapUser.classList.add('wrap');
let userCard = document.createElement('div');
userCard.classList.add('userCard');
let address = userDetails.address;
let geo = address.geo;
let company = userDetails.company;
userCard.innerHTML =
                `<h3> <span>Id :</span> ${userDetails.id}</h3> 
                 <h3> <span>Name :</span>  ${userDetails.name}</h3> 
                 <h3> <span>Usernam :</span>  ${userDetails.username}</h3> 
                 <h3> <span>Email :</span>  ${userDetails.email}</h3>
                 <hr>
                 <h3> <span>Adress:</span></h3> 
                 <h4><span>Street :</span> ${address.street}</h4>
                 <h4><span> Suite :</span> ${address.suite}</h4>
                 <h4><span> City :</span> ${address.city}</h4>
                 <h4><span> Zipcode :</span> ${address.zipcode}</h4>
                 <h4><span> Geo :</span> </h4>
                 <h5><span> Lat :</span> ${geo.lat}</h5>
                 <h5><span> Lng :</span> ${geo.lng}</h5>
                 <hr>
                 <h3><span>Phone :</span>  ${userDetails.phone}</h3>
                 <h3><span>Website :</span> ${userDetails.website}</h3>
                 <hr>
                 <h3><span> Company :</span></h3>
                 <h4><span> Name :</span> ${company.name}</h4>
                 <h4><span> CatchPhrase :</span> ${company.catchPhrase}</h4>
                 <h4><span> Bs :</span> ${company.bs}</h4>
                 
`;
let wrapButton = document.createElement('div');
wrapButton.classList.add('wrapButton');
let postButton = document.createElement('button');
postButton.classList.add('btn');
let postWrap = document.createElement('div');
postWrap.classList.add('postWrap');
postButton.innerText = 'post of current user';
postButton.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + userDetails.id + '/posts')
        .then(response => response.json())
        .then(posts =>{

            for (const post of posts) {
                let postCard = document.createElement('div');
                postCard.classList.add('postCard');
                postCard.innerHTML = `<h4> <span>Title  : </span> ${post.title}</h4>`;
                let btnWrap = document.createElement('div');
                btnWrap.classList.add('btnWrap');
                let postButtonDetails = document.createElement('button');
                postButtonDetails.classList.add('postBtn');
                postButtonDetails.innerText = 'click me';
                postButtonDetails.onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                    window.location = 'post-details.html';

                };

                btnWrap.appendChild(postButtonDetails);
                postCard.appendChild(btnWrap);
                postWrap.appendChild(postCard);
            }
        })

    postButton.disabled = true;
};

wrapButton.appendChild(postButton);
wrapUser.append(userCard, wrapButton ,postWrap);
document.body.appendChild(wrapUser);