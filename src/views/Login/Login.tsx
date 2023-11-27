

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => {sessionStorage.setItem('token', 'test')}}>Click to Login</button>
    </div>
  )
}

export default Login