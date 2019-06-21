import { prepare, render } from 'elementree'

function footer (app) {
  if (!app.todos.length) return null

  const incomplete = app.todos.filter(t => !t.completed)

  return render`
    <footer class="footer">
      <span class="todo-count">
        <strong>
          ${incomplete.length}
        </strong> item${incomplete.length === 1 ? '' : 's'} left
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

  function clearComplete () {
    const complete = app.todos.filter(t => t.completed)
    return (complete.length)
      ? render`
          <button class="clear-completed" onclick=${clear}>
            Clear completed
          </button>
        `
      : null
  }

  function isSelected (href) {
    if ((app.route === '/' || app.route === '/#/') && !href) return 'selected'
    return (app.route.includes(href)) ? 'selected' : ''
  }
}

export default prepare(footer)