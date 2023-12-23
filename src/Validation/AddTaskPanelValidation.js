let errorMsg = ""

// ADD TASK PANEL VALIDATIONS

function validateAddingTask(name, description) {
    if (!isEmpty(name)) {
        if (nameLength(name)) {
            if (!isEmpty(description)) {
                if (descriptionLength(description)) {
                    return ""
                } else {
                    return errorMsg
                }
            } else {
                return "Description can't be empty."
            }
        } else {
            return errorMsg
        }
    } else {
        return "Name can't be empty."
    }
}

// OTHER VALIDATIONS

function nameLength(name) {
    if (name.length >= 5) {
        if (name.length <= 20) {
            return true
        } else {
            errorMsg = "Name is too long (maximum name length is 20)."
            return false
        }
    } else {
        errorMsg = "Name is too short (minimum name length is 5)."
        return false
    }
}

function descriptionLength(description) {
    if (description.length >= 5) {
        if (description.length <= 50) {
            return true
        } else {
            errorMsg = "Description is too long (maximum description length is 50)."
            return false
        }
    } else {
        errorMsg = "Description is too short (minimum description length is 5)."
        return false
    }
}

function isEmpty(input) {
    if (input === "") {
        return true
    } else {
        return false
    }
}

export { validateAddingTask }