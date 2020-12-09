// storage 
// Selector

const form = document.querySelector('form');
const input = document.querySelector('form input');
const uList = document.querySelector('.u-list')
const changeBgColor = document.querySelector('form #todo-color');

getLocal();

// event Listener
form.addEventListener('submit', formSubmit, false);

function formSubmit(e){
    e.preventDefault();

    if (input.value === '') {
    
        console.log("input can't be empty");

    } else {

        liMaker();

        
    }
}



function liMaker() {
    // create li element
    let li = document.createElement('li');
    li.className = 'list';

    // function
    saveLocal(input.value);
    // append li inside ul
    uList.appendChild(li);
    // output value in browser
    li.innerHTML = input.value;


    document.querySelector('#delete-btn').addEventListener('click', function(e) {
        e.preventDefault();

        let i = li.parentElement;
        li.classList.add('deleted');

        i.addEventListener('transitionend', function(e) {
            
            localStorage.removeItem('todo');
            this.remove();
        });
        
    });

    // clear input
    input.value = '';

}



function saveLocal(todoValue) {
    // declare var
    let arr;
    // check if local storage is empty
    if (localStorage.getItem('todo') === null) {
        // create array
        arr = [];
    }
    else {
        // get data from local storage
        arr = JSON.parse(localStorage.getItem('todo'));
    }
    arr.push(todoValue);
    localStorage.setItem('todo', JSON.stringify(arr));
}



function getLocal() {
    // declare var
    let arr;
    // check if local storage is empty
    if (localStorage.getItem('todo') === null) {
        // create array
        arr = [];
    }
    else {
        // get data from local storage
        arr = JSON.parse(localStorage.getItem('todo'));
    }

    arr.forEach(function(todoValue) {

        // create li element
        let li = document.createElement('li');
        li.className = 'list';

        // append li inside ul
        uList.appendChild(li);
        // output value in browser
        li.innerHTML = todoValue;


        document.querySelector('#delete-btn').addEventListener('click', function(e) {
            e.preventDefault();

            let i = li.parentElement;
            li.classList.add('deleted');

            i.addEventListener('transitionend', function(e) {
                
                localStorage.removeItem('todo');
                this.remove();
            });
            
        });

    });
}





// change background color
window.addEventListener('load', function() {

    // choose color 
    changeBgColor.addEventListener('input', changeBackGround, false);

    
    function changeBackGround() {
        if (form) {
            localStorage.setItem('bg-color', changeBgColor.value);
        }
        getBgColor();
    }

    function getBgColor() {
        form.style.backgroundColor = localStorage.getItem('bg-color');
    }
    // execute
    form.style.backgroundColor = localStorage.getItem('bg-color');

});
