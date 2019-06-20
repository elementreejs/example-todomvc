import { prepare, render } from 'elementree'

function list (todos) {
  if (!todos.length) return null

  return render`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" onclick=${completeAll}>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map(renderToDo)}
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
          <input class="toggle" type="checkbox" ${!!completed && 'checked'}>
          <label>${todo.text}</label>
          <button class="destroy" onclick=${destroy(todo)}></button>
        </div>
        <input class="edit" value="${todo.text}" onkeypress="${finished}">
      </li>
    `
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

  function finished () {
    debugger
  }
}

export default prepare(list)