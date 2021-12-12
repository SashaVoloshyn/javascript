// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const post of posts) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h2>ID: ${post.id}</h2> <h3>Title: ${post.title}</h3> <p><strong>Body:</strong> ${post.body}</p>`;
            let divBtn = document.createElement('div');
            divBtn.classList.add('divBtn');
            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'click me';
            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            let cardComment = document.createElement('div');
                            cardComment.classList.add('cardComment');
                            cardComment.innerHTML = `<h2>ID: ${comment.id}</h2> <h3>Name: ${comment.name}</h3> <h3>Email: ${comment.email}</h3> <p><strong>Body:</strong> ${comment.body}</p>`;


                            card.append(cardComment);
                        }
                        btn.disabled = true;

                    });

            };
            divBtn.append(btn);
            card.append(divBtn);
            wrap.append(card);

            document.body.append(wrap);

        }


    });