const addBtn = document.getElementById('addBtn')


function save() {
    let newData = document.getElementsByTagName('input').value;
if(localStorage.getItem('data')== null){
    localStorage.setItem('data', '[]');
}
let oldData = JSON.parse(localStorage.getItem('data'));
oldData.push(newData);
localStorage.setItem('data', JSON.stringify(oldData));
}





addBtn.addEventListener('click', save);