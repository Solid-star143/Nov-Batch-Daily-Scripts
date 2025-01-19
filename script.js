// document.getElementById('mode').
// addEventListener('click',function() {
//     document.body.classList.toggle
//     ('dark-mode');

//     const isDarkMode = document.body.
//     classList.contains('dark-mode');

//     this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
// })

const list = document.querySelector('ul');

function add() {
    const newItem = document.createElement('li');
    newItem.textContent = "New Item";
    list.appendChild(newItem);
}

function remove() {
    const firstItem = document.querySelector('li');
    list.removeChild(firstItem);
}
