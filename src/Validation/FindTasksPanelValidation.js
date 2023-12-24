let errorMsg = ""

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
        if (name.length <= 50) {
            return true
        } else {
            errorMsg = "Name is too long (maximum name length is 50)."
            return false
        }
    } else {
        errorMsg = "Name is too short (minimum name length is 5)."
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

export { validateFindingTasks }