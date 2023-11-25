let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
let listItems = document.querySelectorAll('.list-items');

btn.onclick  = function() {
    sidebar.classList.toggle('active');

}

searchBtn.onclick  = function() {
    sidebar.classList.toggle('active');

} 
function activeLink() {
    listItems.forEach(item =>
    item.classList.remove('active'));
    this.classList.add('active');
}

listItems.forEach(item =>
item.onclick = activeLink);