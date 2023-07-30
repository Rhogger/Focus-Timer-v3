export default function Events({
  controls,
  actions,
  theme
}) {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != 'function') return

    actions[action]()
  })


  theme.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    console.log(action);

    if (typeof actions[action] != 'function') return

    actions[action](event)
  })
}