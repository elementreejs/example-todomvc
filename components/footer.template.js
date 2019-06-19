import { html, prepare, render } from 'elementree'

function footer ({ route, todos }) {
  if (!todos.length) return null

  const complete = todos.filter(t => t.complete)
  const clearComplete = () => {
    return (complete.length)
      ? html`<button class="clear-completed">Clear completed</button>`
      : null
  }
  const incomplete = todos.filter(t => !t.completed)
  const isSelected = (href) => {
    return ((route === '/' || route === '/#/') && !href) ? 'selected'
      : (route.includes(href)) ? 'selected' : ''
  }
  return render`
    <footer class="footer">
      <span class="todo-count">
        <strong>${incomplete.length}</strong> item left
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
}

export default prepare(footer)