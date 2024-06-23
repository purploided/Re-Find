let tabAdder = document.getElementById('addtab');
let tab1btn = document.getElementById('tab1');
let tab2btn = document.getElementById('tab2');
let refindTabOne = document.getElementById('goggleOne');
let refindTabTwo = document.getElementById('goggleTwo');

tabAdder.addEventListener('click', function() {
    tab2btn.style.display = 'block';
});

function tab1() {
    refindTabOne.style.display = 'block';
    refindTabTwo.style.display = 'none';
}
function tab2() {
    refindTabOne.style.display = 'none';
    refindTabTwo.style.display = 'block';
}

tab2btn.addEventListener('click', tab2);
tab1btn.addEventListener('click', tab1);