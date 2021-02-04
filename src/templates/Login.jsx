import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signIn } from '../reducks/users/operations'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => {
        dispatch(signIn())
        dispatch(push('/'))
      }}>
        ログイン
      </button>
    </div>
  )
}

export default Login
