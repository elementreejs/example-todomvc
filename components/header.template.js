import { prepare, render } from 'elementree'

const ENTER_KEY = 13

function header (todos) {
  return render`
    <header class="header" onkeypress=${create}>
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    </header>
  `

  function create (event) {
    if (event.charCode !== ENTER_KEY) return

    const input = document.querySelector('input.new-todo')
    const text = input.value.trim()
    if (text) {
      todos.push({ completed: false, text })
    }
    input.value = ''
  }
}

export default prepare(header)