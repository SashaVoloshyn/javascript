let postDetails = JSON.parse(localStorage.getItem('post'));
let card = document.createElement('div');
card.classList.add('card');
let postWrap = document.createElement('div');
postWrap.classList.add('postWrap')
let comentWrap = document.createElement('div');
comentWrap.classList.add('comentWrap')
postWrap.innerHTML = ` 
                <h1><span>Title:</span> ${postDetails.title}</h1>
                <h4><span>ID:</span> ${postDetails.id}</h4>
                <h3><span>Body:</span> ${postDetails.body}</h3>`;
fetch('https://jsonplaceholder.typicode.com/posts/' + postDetails.id + '/comments')
    .then(response => response.json())
    .then(comments =>{
        for (const comment of comments) {
            let cardComment = document.createElement('div');
            cardComment.classList.add('cardComment');
            cardComment.innerHTML = `<h4><span>Coment:</span> ${comment.id}</h4> 
                                     <h3><span>Name:</span> ${comment.name}</h3>
                                     <h4><span>Email:</span> ${comment.email}</h4> 
                                     <p><span>Body:</span> ${comment.body}</p>`;

            comentWrap.append(cardComment);
        }
    })


card.append(postWrap,comentWrap);
document.body.appendChild(card)