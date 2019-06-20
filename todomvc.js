import { merge, prepare, render } from 'elementree'

import header from './components/header.template'
import list from './components/list.template'
import footer from './components/footer.template'

import 'node_modules/todomvc-common/base.css'
import 'node_modules/todomvc-app-css/index.css'

function todomvc (app) {
  return render`
    <body>
      <section class="todoapp">
        ${header(app.todos)}
      </section>
      ${list(app)}
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
