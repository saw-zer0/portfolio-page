const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

const label = document.getElementsByTagName("label");
console.log(label)

submit.addEventListener('click', (e) => {
    
    if(fullName.value.length < 3){
        e.preventDefault();
        let newP = document.createElement("p");
        newP.innerText = 'name should be longer than 3 characters';
        newP.className = 'danger-text';
        label[0].appendChild(newP);
    };
    if(!(/\w+[@][a-z]+[.][a-z]+/ig).test(email.value)){
        e.preventDefault();
        let newP = document.createElement("p");
        newP.innerText = 'invalid email';
        newP.className = 'danger-text';
        label[1].appendChild(newP);
    }
    if(message.value.length < 3){
        e.preventDefault();
        let newP = document.createElement("p");
        newP.innerText = 'name should be longer than 3 characters';
        newP.className = 'danger-text';
        label[2].appendChild(newP);
    }
})