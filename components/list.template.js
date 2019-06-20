import { prepare, render } from 'elementree'

const ENTER_KEY = 13

function list ({ route, todos }) {
  if (!todos.length) return null

  const filtered = todos.filter(t => {
    if (route.includes('active')) {
      return !t.completed
    }
    if (route.includes('completed')) {
      return t.completed
    }
    return t
  })
  return render`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" onclick=${completeAll}>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${filtered.map(renderToDo)}
      </ul>
    </section>
  `

  function completeAll () {
    todos.map(t => t.completed = !t.completed)
  }

  function renderToDo (todo) {
    const completed = (todo.completed) ? 'completed' : ''
    return render`
      <li class="${completed}" ondblclick="${edit}">
        <div class="view">
          <input class="toggle" type="checkbox" ${!!completed && 'checked'} onclick="${complete(todo)}">
          <label>${todo.text}</label>
          <button class="destroy" onclick=${destroy(todo)}></button>
        </div>
        <input class="edit" value="${todo.text}" onkeypress="${finished(todo)}">
      </li>
    `
  }

  function complete (todo) {
    return function () {
      todo.completed = !todo.completed
    }
  }

  function destroy (todo) {
    return function () {
      todos.splice(todos.lastIndexOf(todo) >>> 0, 1)
    }
  }

  function edit (event) {
    const li = event.currentTarget
    li.classList.toggle('editing', true)
    li.children.item(1).focus()
  }

  function finished (todo) {
    return function (event) {
      if (event.charCode !== ENTER_KEY) return
      todo.text = event.currentTarget.value.trim()
    }
  }
}

export default prepare(list)