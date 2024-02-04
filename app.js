let $ = document
const input = $.querySelector('input')
const addBtn = $.querySelector('.addBtn')
const todoContainer = $.querySelector('.Todos')
const wrapper = $.querySelector('.wrapper')


function createTodo() {
    if (input.value !== '') {
        wrapper.innerHTML = ''
        let todoItem = $.createElement('div')
        todoItem.classList.add('flex', 'justify-between', 'pb-2')
        let todoDiv = $.createElement('div')
        todoDiv.classList.add('flex', 'items-center', 'space-x-4')
        let circle = $.createElement('div')
        circle.classList.add('circle', 'border-green-500', 'border-2')
        let todo = $.createElement('p')
        todo.classList.add('text-zinc-300', 'cursor-pointer')
        todo.innerHTML = input.value

        let iconWrapper = document.createElement('div')
        iconWrapper.insertAdjacentHTML('afterbegin', `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-4 text-green-500 cursor-pointer xIcon">
            <path fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd" />
                </svg>
                `)

        todoContainer.append(todoItem)
        todoItem.append(todoDiv, iconWrapper)
        todoDiv.append(circle, todo)

        clearTodoContainer()

        todo.addEventListener('click', function () {
            todo.style.cssText = 'text-decoration: line-through; color: #9ca3af;'
            circle.style.backgroundColor = '#22c55e'
        })
        iconWrapper.addEventListener('click', function () {
            todoItem.remove()
            clearTodoContainer()
        })

        input.value = ''
    }
}


function clearTodoContainer() {
    wrapper.innerHTML = ''
    if (todoContainer.innerHTML !== '') {
        h1Elem = $.createElement('h1')
        h1Elem.classList.add("task-title", "text-white", "mt-6", "ml-8")
        h1Elem.innerHTML = 'Your Tasks'
        wrapper.append(h1Elem)
    } else {
        h1Elem.remove()
    }
}

addBtn.addEventListener('click', createTodo)
window.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        createTodo()
    }
})