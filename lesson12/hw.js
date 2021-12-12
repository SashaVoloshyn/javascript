// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//
//         for (const post of posts) {
//             let card = document.createElement('div');
//             card.classList.add('cardContent');
//             let id = document.createElement('div');
//             id.innerHTML = `<h2>ID: ${post.id}</h2>`;
//             let title = document.createElement('div');
//             title.innerHTML = `<h3>Title: ${post.title}</h3>`;
//             let cardBody = document.createElement('div');
//             cardBody.innerHTML = `<p>Body: ${post.body}</p>`;
//
//
//
//
//             card.append(id, title, cardBody);
//             wrap.append(card);
//
//         }
//         document.body.append(wrap);
//     });


    // 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wraper = document.createElement('div');
        wraper.classList.add('wrap');
        for (const comment of comments) {
            let commentCard = document.createElement('div');
            commentCard.classList.add('commentCard');
            let id = document.createElement('div');
            id.innerHTML = `<h2>ID: ${comment.id}</h2>`;
            let comentName = document.createElement('div');
            comentName.classList.add('name');
            comentName.innerHTML = ` <h3>Name: ${comment.name}</h3>`;
            let email = document.createElement('div');
            email.innerHTML = ` <h3>Email: ${comment.email}</h3>`;
            let commentBody = document.createElement('div');
            commentBody.innerHTML = `<p><strong>Body:</strong> ${comment.body}</p>`;



            commentCard.append(id, comentName, email, commentBody);
            wraper.append(commentCard);
            document.body.append(wraper);
        }
    });