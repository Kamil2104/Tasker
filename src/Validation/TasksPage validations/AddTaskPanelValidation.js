let errorMsg = ""

// ADD TASK PANEL VALIDATIONS

function validateAddingTask(name, description) {
    if (!isEmpty(name)) {
        if (!isEmpty(description)) {
            if (nameLength(name)) {

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

}

function isEmpty(input) {
    if (input === "") {
        return true
    } else {
        return false
    }
}