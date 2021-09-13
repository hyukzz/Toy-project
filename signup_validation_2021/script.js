let elInputUsername = document.querySelector('#username')

let elFailureMessage = document.querySelector('.failure-message')

let elSuccessMessage = document.querySelector('.success-message')

elInputUsername.onkeyup = function() {

    if(isMoreThan4Length(elInputUsername.value)) {
        //성공 메시지 보여야 함
        elSuccessMessage.classList.remove('hide')
        
        //실패 메시지가 가려져야 함
        elFailureMessage.classList.add('hide')
    } 
    else {
        //성공 메시지가 가려져야 함
        elSuccessMessage.classList.add('hide')
        
        //실패 메시지가 보여야 함
        elFailureMessage.classList.remove('hide')
    }
}

function isMoreThan4Length(value) {
    return value.length >= 4
}


function isMatch(password1, password2) {
    return password1===password2
}

let elInputPassword = document.querySelector('#password')
let elInputCheckPassword = document.querySelector('#password-retype')

let passwordFailure = document.querySelector('.mismatch-message')
    console.log(passwordFailure)
 
elInputCheckPassword.onkeyup = function() { 
    
    if(isMatch(elInputPassword.value, elInputCheckPassword.value)) {
      passwordFailure.classList.add('hide')
    }
    else {
      passwordFailure.classList.remove('hide')
    }
  }