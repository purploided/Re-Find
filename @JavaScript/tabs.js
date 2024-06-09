let tabAdder = document.getElementById('addtab');
let refindTabOne = document.getElementById('goggleOne');
let refindTabTwo = document.getElementById('goggleTwo');

tabAdder.addEventListener('click', function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === '1') {
            refindTabOne.style.display = 'block';
            refindTabTwo.style.display = 'none';
        } else if (event.key === '2') {
            refindTabOne.style.display = 'none';
            refindTabTwo.style.display = 'block';
        }
    });
});