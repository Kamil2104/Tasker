errorMsg = ""

// FIND TASKS PANEL VALIDATIONS

function validateFindingTasks(name) {
    if (!isEmpty(name)) {
        if (nameLength(name)) {
            return ""
        } else {
            return errorMsg
        }
    } else {
        return "Name can't be empty!"
    }
}

// OTHER VALIDATIONS

function nameLength(name) {
    if (name.length >= 5) {
        if (name.length <= 20) {
            return true
        } else {
            errorMsg = "Name is too long."
            return false
        }
    } else {
        errorMsg = "Name is too short."
        return false
    }
}

function isEmpty(name) {
    if (name === "") {
        return true
    } else {
        return false
    }
}