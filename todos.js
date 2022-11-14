const todoForm = document.querySelector('#add-form');
const todoFormSbmBtn = document.querySelector('#todo-form-submit');

function sendData() {
    let data = new FormData(todoForm);
    let obj = {};


    data.forEach((value, key) => {
        
        obj[key] = value
    });
    console.log(obj);

    fetch('https://testapi.io/api/azelenec/resource/todo', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Naudojame JSON.stringify, nes objekte neturim .json() metodo
        body: JSON.stringify(obj) 
    })
    .then(obj => console.log(obj.json()))
    .catch((klaida) => console.log(klaida));
}

todoFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})


const url = 'https://testapi.io/api/azelenec/resource/todo';
const options = {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const response = {};

function loadData() {
    fetch(url, options)
    .then((response) => response.json())
    .then((a) => {
        console.log(a);
        const todoEle = document.getElementById('todo-text');
        let htmlTodo = '';

        a.data.forEach(element => {
            console.log(element);
            let htmlElement = `
            
            <div style="width: 90%;
            height: 90px;
            border: none;
            border-radius: 5px;
            background: wheat;
            margin-top: 10px;
            margin-top: 10px;
            border: 1px solid black;">
            <i class="abreviation" style="color:black">Type: ${element.type}</i></br>
            
            <i class="abreviation" style="color:black">Content: ${element.content}</i></br>
            
            <i class="abreviation" style="color:red">EndDate: ${element.endDate}</i></br></br>
            </div>
        `;
            htmlTodo += htmlElement;
        });

        todoEle.innerHTML = htmlTodo;
    })
}

loadData();



