const loadFriend = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayFriend(data))
}
loadFriend()

const displayFriend = data => {
    const buddies = data.results;
    const div = document.getElementById('buddy')
    for (const buddy of buddies) {
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last}.
        Email: ${buddy.email}`;
        div.appendChild(p)
    }
} 