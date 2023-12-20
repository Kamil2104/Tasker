const errorMsg = ""

// LOGIN VALIDATIONS

function loginValidation(login) {
    
}

function newLoginValidation() {

}

// PASSWORD VALIDATIONS

function singlePasswordValidation() {

}

function doublePasswordValidation() {

}

// OTHER VALIDATIONS
function loginLengthValidator(login) {
    if (login != "") {
        if (login.length() >= 5) {
            if (login.length() <= 20) {
                return true
            } else {
                errorMsg = "Login is to long!"
                return false
            }
        } else {
            errorMsg = "Login is to short!"
            return false
        }
    } else {
        errorMsg = "Login can't be empty!"
        return false
    }
}