const registerBtn = document.querySelector('#register-btn');
const loginBtn = document.querySelector('#login-btn');
const registerBox = document.querySelector('#register-box');
const loginBox = document.querySelector('#login-box');



window.onload = () => {
    setButtons();
}

const setButtons = () => {
    registerBtn.addEventListener('click', () => {
        registerBox.style.display = 'block';
        loginBox.style.display = 'none';
        
    });

    loginBtn.addEventListener('click', () => {
        registerBox.style.display = 'none';
        loginBox.style.display = 'block';
        
    });
}





const registerForm = document.querySelector('#register-form');
const registerFormSbmBtn = document.querySelector('#todo-form-submit');

function sendData() {
    let data = new FormData(registerForm);
    let obj = {};


    data.forEach((value, key) => {
        
        obj[key] = value
    });
    console.log(obj);

    fetch('https://testapi.io/api/azelenec/resource/reg', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(obj) 
    })
    .then(obj => console.log(obj.json()))
    .catch((eror) => console.log(eror));
}

registerFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})







