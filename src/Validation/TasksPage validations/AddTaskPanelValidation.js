// ADD TASK PANEL VALIDATIONS

function validateAddingTask(name, description) {
    if (!isEmpty(name)) {
        if (!isEmpty(description)) {

        } else {
            return "Description can't be empty."
        }
    } else {
        return "Name can't be empty."
    }
}

// OTHER VALIDATIONS

function nameLength(name) {

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