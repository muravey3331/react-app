
export function addTask(name) {
    return {
        type: 'ADD_TASK',
        payload: name
    };
}
export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: id
    };
}
export function checkTask(id) {
    return {
        type: 'CHECK_TASK',
        payload: id
    };
}