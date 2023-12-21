let errorMsg = ""
const loginPattern = "^[a-zA-Z0-9]+$"

// LOGIN VALIDATIONS

function validateLogin(login) {
    if (validateLoginLength(login)) {
        if (loginPattern.test(login)) {
            return ""
        } else {
            return "The login contains illegal characters. Please use only letters and numbers."
        }
    } else {
        return errorMsg
    }
}

// PASSWORD VALIDATIONS

function validateSinglePassword() {

}

function validateDoublePassword() {

}

// OTHER VALIDATIONS
function validateLoginLength(login) {
    if (login !== "") {
        if (login.length() >= 5) {
            if (login.length() <= 20) {
                return true
            } else {
                errorMsg = "Login is too long."
                return false
            }
        } else {
            errorMsg = "Login is too short."
            return false
        }
    } else {
        errorMsg = "Login can't be empty."
        return false
    }
}

export {
    validateLogin,
    validateSinglePassword,
    validateDoublePassword,
    validateLoginLength,
}