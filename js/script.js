const opens = document.getElementById('open');
const containerInfo = document.querySelector('.container_info');
const downTop = document.querySelector('.down_top');


let Opens = true;


const addOpen = (add) => {
    for (let i = 0; i < add.children.length; i++) {
        newArr = add.children[1];
        newArr2 = add.children[0].children[1].children[0];
    }

    if (Opens === true) {
        newArr.classList.remove('active_menu');
        newArr2.classList.add('down');
        Opens = false;
    } else {
        newArr.classList.add('active_menu');
        newArr2.classList.remove('down');
        Opens = true;

    }

}
