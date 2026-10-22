// Selecionar Elementos

const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector
('#cancel-edit-btn')

let oldInputValue

// Funções

const saveTodo = (text) => {

    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.textContent = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = ''
    todoInput.focus()
}

const toggleForms = () => {
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
    editForm.classList.toggle('hide')
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3')

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}

// Eventos

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener('click', (e) => {
    const targetEl = e.target.closest('div')
    const targetFinish = e.target.closest('.finish-todo')
    const targetRemove = e.target.closest('.remove-todo')
    const targetEdit = e.target.closest('.edit-todo')
    let todoTitle

    if(targetEl && targetEl.querySelector('h3')) {
        todoTitle = targetEl.querySelector('h3').innerText
    }

    if(targetFinish) {
        const parentEl = targetFinish.closest('div')
        parentEl.classList.toggle('done')
    }

    if(targetRemove) {
        const parentEl = targetRemove.closest('div')
        parentEl.remove()
    }

    if(targetEdit) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }
})

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue)
    }
    
    toggleForms()
})