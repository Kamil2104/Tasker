let errorMsg = "";
const loginPattern = /^[a-zA-Z0-9]+$/;

// LOGIN VALIDATIONS

function validateLogin(login) {
    if (!isLoginEmpty(login)) {
        if (validateLoginLength(login)) {
            if (loginPattern.test(login)) {
                return "";
            } else {
                return "The login contains illegal characters. Please use only letters and numbers.";
            }
        } else {
            return errorMsg;
        }
    } else {
        return "Login can't be empty";
    }
}

// PASSWORD VALIDATIONS

function validatePassword(password) {
    if (!isPasswordEmpty(password)) {
        if (validatePasswordLength(password)) {
            return "";
        } else {
            return errorMsg;
        }
    } else {
        return "Password can't be empty."
    }
}

function validateCreateAccountPasswords(password1, password2) {
    if (!isPasswordEmpty(password1) && !isPasswordEmpty(password2)) {
        if (password1 === password2) {
            return validatePassword(password1);
        } else {
            return "Passwords are not the same."
        }
    } else {
        return "Passwords can't be empty."
    }
}

function validateChangePasswordPasswords(oldPassword, newPassword) {
    if (!isPasswordEmpty(oldPassword) && !isPasswordEmpty(newPassword)) {
        if (oldPassword !== newPassword) {
            return validatePassword(oldPassword);
        } else {
            return "Passwords are the same."
        }
    } else {
        return "Passwords can't be empty."
    }
}

// OTHER VALIDATIONS

function validateLoginLength(login) {
    if (login !== "") {
        if (login.length >= 5) {
            if (login.length <= 20) {
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

function validatePasswordLength(password) {
    if (password.length >= 5) {
        if (password.length <= 25) {
            return true
        } else {
            errorMsg = "Password is too long."
            return false
        }
    } else {
        errorMsg = "Password is too short."
        return false
    }
}

function isLoginEmpty(login) {
    if (login === "") {
        return true
    } else {
        return false
    }
}

function isPasswordEmpty(password) {
    if (password === "") {
        return true
    } else {
        return false
    }
}

export {
    validateLogin,
    validatePassword,
    validateCreateAccountPasswords,
    validateChangePasswordPasswords
}