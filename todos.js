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

        body: JSON.stringify(obj)
    })
        .then(obj => console.log(obj.json()))
        .catch((klaida) => console.log(klaida));

}

todoFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendData();

})


//const url = 'https://testapi.io/api/azelenec/resource/todo';
const options = {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const response = {};

function loadData() {
    fetch('https://testapi.io/api/azelenec/resource/todo', options)
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

            <i class="abreviation" style="color:blue">Id: ${element.id}</i></br></br>
            </div>
        `;
                htmlTodo += htmlElement;
            });

            todoEle.innerHTML = htmlTodo;

        })

}

loadData();











const deleteForm = document.querySelector('#deleteform');
const deeleteFormSbmBtn = document.querySelector('#delete-form-submit');

function deleteData() {
    let data = new FormData(deleteForm);
    let obj = {};


    data.forEach((value, key) => {

        obj[key] = value
    });

    const url = 'https://testapi.io/api/azelenec/resource/todo/' + obj.id;

    const urlFetchTodo = 'https://testapi.io/api/azelenec/resource/todo/' + obj.id;
    const optionsFetchTodo = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch(urlFetchTodo, optionsFetchTodo)
        .then((response) => response.json())
        .then((a) => {
            console.log(`Todo exists: ${a}`);
            return fetch(url, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
        })
        .then(obj => { // Now we are working with our Delete fetch
            const res = obj;// .json()
            console.log(res);
            return res;
        })
        .catch((error) => {
            console.log(`Request failed with error: ${error}`);
        })



}

deeleteFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    deleteData();
})




















const updateForm = document.querySelector('#update-form');
const updateFormSbmBtn = document.querySelector('#update-form-submit');

function editData() {
    let data = new FormData(updateForm);
    let obj = {};


    data.forEach((value, key) => {
        obj[key] = value
    });

    //const url = 'https://testapi.io/api/azelenec/resource/todo/' + obj.id;

    fetch('https://testapi.io/api/azelenec/resource/todo/' +obj.id, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(obj => {
            const res = obj.json()
            console.log(res);
            return res;
        })
        .catch((eror) => console.log(eror));
}

updateFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editData();
})