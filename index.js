const form = document.getElementById('formPrimary');
const name = document.getElementById('name');
const email = document.getElementById('exampleInputEmail1');
const Password = document.getElementById('exampleInputPassword1');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const cep1 = document.getElementById('cep1');
const checkbox = document.getElementById('exampleCheck1');
const submit = document.getElementById('submit');
const input = document.querySelectorAll('input');

function validate() {
  const regEX1 = /^[a-zA-Z0-9 - ]{6,12}$/;
  const regEX2 = /^[a-zA-Z0-9 - ]{4,}$/;
  const regEX3 = /^[A-Z0-9 - ]{9,10}$/;
  const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
  
  if (!regEX1.test(name.value)) {
    name.setAttribute('class', 'error');
    name.focus();
    return false;
  }

  if (!emailRegex.test(email.value)) {
    email.setAttribute('class', 'error');
    email.focus();
    return false;
  }

  if (Password.value < 4) {
    email.setAttribute('class', 'error');
    email.focus();
    return false;
  }
  
  if (!regEX2.test(address.value)) {
    address.setAttribute('class', 'error');
    address.focus();
    return false;
  }

  if (!regEX2.test(city.value)) {
    city.setAttribute('class', 'error');
    city.focus();
    return false;
  }

  if (state.value === "") {
    state.setAttribute('class', 'error');
    state.focus();
    return false;
  }

  if (!regEX3.test(cep1.value)) {
    cep1.setAttribute('class', 'error');
    cep1.focus();
    return false;
  }

  if (!checkbox.checked) {
    alert('Checkboxni belgilang')
    return false;
  }


  return true;
}

submit && submit.addEventListener('click', (event) => {
  event.preventDefault()
  

  if (validate()) {
    input[0].setAttribute('class', 'success');
    input[1].setAttribute('class', 'success');
    input[2].setAttribute('class', 'success');
    input[3].setAttribute('class', 'success');
    input[4].setAttribute('class', 'success');
    input[5].setAttribute('class', 'success');
    state.setAttribute('class', 'success');
    input[6].setAttribute('class', 'success');
    
    alert("Validatsiyadan o'tdi")
  };

});


  