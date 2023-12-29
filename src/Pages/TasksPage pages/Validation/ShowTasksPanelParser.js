// Function to transform the task content into a JSON object
const parseTaskContent = (content) => {
    const lines = content.split('\n');
    const taskObject = {};
    lines.forEach(line => {
        const [key, value] = line.split(':');
        taskObject[key.trim()] = value.trim();
    });

    return taskObject;
}

export {
    parseTaskContent
}