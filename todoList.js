//Date
const date = document.getElementById("date")
const options = {weekday: "long", year: "numeric", month: "short", day: "numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {

    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('i');
        editButton.innerHTML = 
            `
                <i class="fa fa-edit"></i>
            `;
        editButton.classList.add('editButton');

        let removeButton = document.createElement('i');
        removeButton.innerHTML = 
            `
                <i class="fa fa-trash"></i>
            `;
        removeButton.classList.add('removeButton');

        let check = document.createElement('i');
        check.innerHTML =
            `
                <i class="fa fa-circle-o"></i>
            `;
        check.classList.add('check');
      
        container.appendChild(itemBox);

        itemBox.appendChild(check);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));

        check.addEventListener('click', function() {
            $("i", this).toggleClass("fa fa-circle-o fa fa-check-circle");
        });

    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}

new item("Badminton");
new item("Shopping");

function onList() {
    if(input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', onList);

//Press Enter
window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        onList();
    }
});



