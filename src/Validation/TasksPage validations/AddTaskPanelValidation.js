let errorMsg = ""

// ADD TASK PANEL VALIDATIONS

function validateAddingTask(name, description) {
    if (!isEmpty(name)) {
        if (!isEmpty(description)) {
            if (nameLength(name)) {
                if (descriptionLength(description)) {
                    return ""
                } else {
                    return errorMsg
                }
            } else {
                return errorMsg
            }
        } else {
            return "Description can't be empty."
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
            errorMsg = "Name is too long."
            return false
        }
    } else {
        errorMsg = "Name is too short."
        return false
    }
}

function descriptionLength(description) {
    if (description.length >= 5) {
        if (description.length <= 20) {
            return true
        } else {
            errorMsg = "Description is too long."
            return false
        }
    } else {
        errorMsg = "Description is too short."
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