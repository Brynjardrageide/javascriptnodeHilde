const items = document.getElementById('itemlist');
const nameForm = document.getElementById('nameForm');

nameForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    await postItem();
});


async function getItems() {
    items.innerHTML = ''; // Clear the list

    const response = await fetch('/getall');
    const data = await response.json();

    data.forEach(function(item) {
        const listitem = document.createElement('li');
        listitem.innerHTML = item.name;
        items.appendChild(listitem);
    });
}


async function postItem() {

    let newName = nameForm.nameInput.value;


    await fetch('/newname', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: newName})
    });
    getItems();
}


getItems();
