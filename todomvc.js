import { merge, prepare, render } from 'elementree'

import header from './components/header.template'
import list from './components/list.template'
import footer from './components/footer.template'

function todomvc (app) {
  const todos = app.todos.filter(t => true)
  return render`
    <body>
      <section class="todoapp">
        ${header(app.todos)}
      </section>
      ${list(todos)}
      ${footer(app)}
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://github.com/mjstahl">Mark Stahl</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </body>
  `
}

export default merge('body', prepare(todomvc), {
  todos: []
})
