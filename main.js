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











const logFirstName = document.querySelector('#name-inp-log');
const logLastName = document.querySelector('#surname-inp-log');
const loginFormSbmBtn = document.querySelector('#login-form-submit');
const url = 'https://testapi.io/api/azelenec/resource/reg';

const options = {
    method: 'get',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
}

function patikrintiVartotojus() {
    fetch(url)
        .then((response) => response.json())
        .then((userData) => {
            let arEgzistuoja = false;
            userData.data.forEach(user => {
                if (user.userName.toLowerCase() === logFirstName.value.toLowerCase() && user.surName.toLowerCase() === logLastName.value.toLowerCase()) {
                    console.log(`vardas ${user.userName} ir pavarde ${user.surName} ir email ${user.email}`);
                    window.alert(`Sveiki prisijunge ${user.userName} `);
                    arEgzistuoja = true
                    const vartotojoDuomenys = {

                        regUserName: user.userName,
                        regUserLastname: user.surName,

                    };

                }

            });

            if (!arEgzistuoja)
                window.alert(`Toks vartotojas Neegzistuoja `);



        })
        .catch((eror) => console.log(eror));
}


loginFormSbmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    patikrintiVartotojus();
});










