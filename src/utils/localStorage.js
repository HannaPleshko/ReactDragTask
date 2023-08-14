export const savetoLocalStorage = (todos) => {
    if(todos){
        localStorage.setItem('newTodos', JSON.stringify(todos))
    }
}

export const removeFromLocalStorage = (id, todos) => {
    const filtered = todos.filter((todo) => {
        return todo.id !== id
    })
    localStorage.setItem('newTodos', JSON.stringify(filtered))
}
