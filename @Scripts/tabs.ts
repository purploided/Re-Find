/*
    shitty tabs system
*/

let tabAdder = document.getElementById('addtab') as HTMLButtonElement;
let tab1btn = document.getElementById('tab1') as HTMLButtonElement;
let tab2btn = document.getElementById('tab2') as HTMLButtonElement;
let refindTabOne = document.getElementById('goggleOne') as HTMLElement;
let refindTabTwo = document.getElementById('goggleTwo') as HTMLElement;

tabAdder.addEventListener('click', function() {
    tab2btn.style.display = 'block';
}); // tab adder is the [+]

function tab1() {
    refindTabOne.style.display = 'block';
    refindTabTwo.style.display = 'none';
}

function tab2() {
    refindTabOne.style.display = 'none';
    refindTabTwo.style.display = 'block';
}

function tab2Remove() {
    tab2btn.style.display = 'none';
    refindTabOne.style.display = 'block';
    refindTabTwo.style.display = 'none';
}

tab2btn.addEventListener('click', tab2);
tab1btn.addEventListener('click', tab1);

// bring up a context menu on tab 2 when right clicked (allowing you to remove it)

let tab2Context = document.getElementById('tab2') as HTMLButtonElement;

tab2Context.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // prevent the profile context menu from appearing
    let contextMenu = document.querySelector('.context-menu');

    if (!contextMenu) {
        contextMenu = document.createElement('div');
        contextMenu.classList.add('context-menu');

        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove Tab';
        removeButton.addEventListener('click', function() {
            tab2Remove();
        });
        contextMenu.appendChild(removeButton);

        document.addEventListener('click', function() { // clicking off context menu will remove it
            if (contextMenu) {
                contextMenu.remove();
            }
        });

        contextMenu.style.top = event.clientY + 'px';
        contextMenu.style.left = event.clientX + 'px';

        document.body.appendChild(contextMenu);
    }
});