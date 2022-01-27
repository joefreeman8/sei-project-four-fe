import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

const initialState = {
  username: '',
  password: '',
}

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = React.useState(initialState)
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setIsError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(formData)
      setToken(res.data.token)
      navigate('/')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <div className="container bg-donationTile bg-repeat-round h-full min-w-full flex flex-col justify-center items-center">
      <div className="login-background h-96 w-full bg-center bg-cover">

      </div>
      <form className="bg-white w-4/5 md:w-2/3 h-1/2 px-5 pb-10 mb-20 mx-auto -mt-32 flex flex-col items-center shadow" onSubmit={handleSubmit}>
        <h2 className="text-2xl pt-5">Login</h2>
        <hr className="mx-5 mb-5"></hr>
        {isError && <div>
          <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 w-4/5 mt-5 mx-auto text-red-700">
            <p>Sorry your username or password were incorrect</p>
          </div>
        </div>}
        <label className="block mx-5 mb-2 text-pawhub-grey text-sm font-bold" htmlFor="username">
            Username
        </label>
        <input
          className="block shadow rounded border-2 h-16 w-full py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5 rounded-lg" id="username" type="text" name="username" placeholder="Enter your username" onChange={handleChange}>
        </input>
        <label className="block mx-5 mb-2 text-pawhub-grey text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input className="block shadow rounded border-2 h-16 w-full py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-8 rounded-lg" id="passowrd" type="password" name="password" placeholder="Password" onChange={handleChange}>
        </input>
        <button className="rounded-md w-full h-12 mb-8 bg-pawhub-yellow text-black text-xl font-bold" type="submit">
              Login 
        </button>
        <div className="mx-5 text-blue-700">
          <Link className='text-pawhub-purple' to="/register" >Don&apos;t have an account? Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default Login