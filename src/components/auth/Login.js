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
    <div className="container bg-stone-300/50 h-full w-full mx-auto flex flex-col justify-center items-start">
      <div className="mx-auto">
        <h1 className="text-6xl text-pawhub-grey font-bold align-center p-8">Login</h1>
      </div>
      <form className="bg-white w-2/3 h-1/2 pb-10 mb-20 mx-auto flex flex-col" onSubmit={handleSubmit}>
        <h2 className="text-2xl p-5">Login</h2>
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
          className="block shadow rounded border-2 h-8 w-1/2 py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="username" type="text" name="username" placeholder="Enter your username" onChange={handleChange}>
        </input>
        <label className="block mx-5 mb-2 text-pawhub-grey text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="block shadow rounded border-2 h-8 w-1/2 py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="passowrd" type="password" name="password" placeholder="password" onChange={handleChange}>
        </input>
        <div className="h-14 flex justify-end">
          <button className="rounded-md w-1/6 mr-32 bg-cyan-600 text-white font-bold" type="submit">
            Login 
          </button>
        </div>
        <div className="mx-5 text-blue-700">
          <Link to="/register" >Signup</Link>
        </div>
      </form>

    </div>

  )
}

export default Login