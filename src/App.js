import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from './reducks/users/actions';

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)

  console.log(selector.users)

  return (
    <div className="App">
      <button
        onClick={() => dispatch(signInAction({ uid: '0001', username: 'yokokura' }))}>Sign in
      </button>
    </div>
  )
}

export default App
