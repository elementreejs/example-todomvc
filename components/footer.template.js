import { prepare, render } from 'elementree'

function footer (app) {
  if (!app.todos.length) return null

  const complete = app.todos.filter(t => t.completed)
  const clearComplete = () => {
    return (complete.length)
      ? render`
          <button class="clear-completed" onclick=${clear}>
            Clear completed
          </button>
        `
      : null
  }
  const incomplete = app.todos.filter(t => !t.completed)
  const isSelected = (href) => {
    return ((app.route === '/' || app.route === '/#/') && !href) ? 'selected'
      : (app.route.includes(href)) ? 'selected' : ''
  }
  const plural = incomplete.length === 1 ? '' : 's'

  return render`
    <footer class="footer">
      <span class="todo-count">
        <strong>${incomplete.length}</strong> item${plural} left
      </span>
      <ul class="filters">
        <li>
          <a class="${isSelected()}" href="#/">
            All
          </a>
        </li>
        <li>
          <a class="${isSelected('active')}" href="#/active">
            Active
          </a>
        </li>
        <li>
          <a class="${isSelected('completed')}" href="#/completed">
            Completed
          </a>
        </li>
      </ul>
      ${clearComplete()}
    </footer>
  `

  function clear () {
    app.todos = app.todos.filter(t => !t.completed)
  }
}

export default prepare(footer)