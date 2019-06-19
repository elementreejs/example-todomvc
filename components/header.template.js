import { prepare, render } from 'elementree'

function header (todos) {
  return render`
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
  `
}

export default prepare(header)