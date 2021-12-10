let favorits = JSON.parse(localStorage.getItem('favorites'));

for (const favorit of favorits) {
    let favorWrap = document.createElement('div');
    favorWrap.innerText = `Name : ${favorit.name}  Age : ${favorit.age}  Status : ${favorit.status}`;
    document.body.append(favorWrap);

}