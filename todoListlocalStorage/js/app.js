let inputElem = document.getElementById('input')
let addBtn = document.getElementById('addBtn')
let clearBtn = document.getElementById('clearBtn')
let ulTodo = document.getElementById('ulTodo')
let comp, del
comp = document.getElementById('comp')
del = document.getElementById('del')
let todoArray = []

function addBtnFunc() {
    let todos = {
        id: todoArray.length + 1,
        title: inputElem.value,
        complete: false
    }
    todoArray.push(todos)
        // console.log(todoArray);

    inputElem.value = ''
    localStg(todoArray)
    generateTodos(todoArray)
    inputElem.focus()
}

function localStg(mm) {
    localStorage.setItem('todos', JSON.stringify(mm))
}

function generateTodos(mm) {
    ulTodo.innerHTML = ''
    mm.forEach(todo => {
        // console.log(todo.title);
        let li = document.createElement('li')
        li.className = 'complete list mb-2 d-flex align-items-center'

        let h5 = document.createElement('h5')
        h5.className = 'title'
        h5.innerHTML = todo.title

        let completeBtn = document.createElement('button')
        completeBtn.className = 'btn btn-success'
        completeBtn.innerHTML = 'Complete'
        completeBtn.setAttribute('onclick', 'editTodo(' + todo.id + ')')

        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger me-1'
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.setAttribute('onclick', 'delTodo(' + todo.id + ')')

        if (todo.complete) {
            li.className = 'uncomplete list mb-2 d-flex align-items-center'
            completeBtn.innerHTML = 'uncomplete'
        }

        li.append(h5, completeBtn, deleteBtn)
        ulTodo.append(li)

    });
}

function editTodo(todoid) {
    let gtLocal2 = JSON.parse(localStorage.getItem('todos'))
    todoArray = gtLocal2
    todoArray.forEach(todo => {
        if (todo.id === todoid) {
            todo.complete = !todo.complete
        }
    })
    localStg(todoArray)
    generateTodos(todoArray)
}

function delTodo(todoid) {
    let gtLocal = JSON.parse(localStorage.getItem('todos'))
    todoArray = gtLocal
    let indexTodo = todoArray.findIndex(todo => {
        return todo.id === todoid
    })
    todoArray.splice(todoArray, 1)
    localStg(todoArray)
    generateTodos(todoArray)
}

function getLocal() {
    let getLoc = JSON.parse(localStorage.getItem('todos'))
    if (getLoc) {
        todoArray = getLoc
    } else {
        todoArray = []
    }
    localStg(todoArray)
    generateTodos(todoArray)
}

function clearBtnFunc() {
    // ulTodo.remove()
    todoArray = []
    generateTodos(todoArray)
    localStorage.removeItem('todos')
}

window.addEventListener('load', getLocal)
addBtn.addEventListener('click', addBtnFunc)
clearBtn.addEventListener('click', clearBtnFunc)
inputElem.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addBtnFunc()
        inputElem.focus()
    }
})