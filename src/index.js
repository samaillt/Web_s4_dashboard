import { h, app } from 'hyperapp'
import { Link, Route, location as router } from '@hyperapp/router'
import '../styles/app.scss'
import actions from './actions'
import state from './state'
import view from './components/App'

const appArgs = [state, actions, view, document.getElementById('app')]

let main

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools').then((devtools) => {
    main = devtools(app)(...appArgs)
    const unsubscribe = router.subscribe(main.location)
  })
} else {
  main = app(...appArgs)
  const unsubscribe = router.subscribe(main.location)
}
