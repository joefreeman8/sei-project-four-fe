import React from 'react'
import { useNavigate } from 'react-router-dom'

import { loginUser, registerUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

const initialState = {
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
  preferred_breed_one: 'Any',
  preferred_age: 'Any',
  preferred_sex: 'Male',
  has_dogs: false,
  has_cats: false,
  has_kids: false,
}

const loginDataOnlyInitialState = {
  username: '',
  password: '',
}

function Register() {

  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const [loginData, setLoginData] = React.useState(loginDataOnlyInitialState)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
    setLoginData({ username: e.target.name === 'username' ? e.target.value : formData.username, password: e.target.name === 'password' ? e.target.value : formData.password })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formData)
      const res = await loginUser(loginData)
      setToken(res.data.token)
      navigate('/')
    } catch (err) {
      setFormErrors(err.response.data)
    }
  }

  console.log(loginData)

  return (
    <div className="container h-full min-w-full bg-donationTile bg-repeat-round">
      {/* adorable puppy image */}
      <div className="register-background h-96">
        {/* <img className="object-cover mx-auto w-3/5 lg:w-full h-1/6" src="https://i.imgur.com/rRP9lbR.jpg?1"></img> */}
      </div>
      {/* form starts here */}
      <form className="bg-white shadow-xl rounded w-3/5 mx-auto -mt-16 px-5 pt-5 pb-5" onSubmit={handleSubmit}>
        <div>
          <p className="text-3xl text-slate-700 text-bold text-center pb-5">Sign up to Pawhub</p>
          <p className="mb-10">Sign up to PawHub and join thousands of other dog lovers looking to find their four-legged partners. Once you sign-up, you can add dogs to your favourites, ask questions about any dog available for adoption, and start the adoption process for your future best friend.</p>
        </div>
        <div className="mb-4">
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          <input
            className="shadow border-2 h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="email" type="text" name="email" placeholder="Enter your email address"
            onChange={handleChange}>
          </input>
          {formErrors.username && <p className="text-red-500">{formErrors.username}</p>}
          <input
            className="shadow border-2 h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="username" type="text" name="username" placeholder="Enter your username"
            onChange={handleChange}>
          </input>
          {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          <input className="shadow border-2 h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="passowrd" type="password" name="password" placeholder="Password"
            onChange={handleChange}>
          </input>
          {formErrors.detail && <p className="text-red-500">{formErrors.detail}</p>}
          <input className="shadow border-2 h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" type="password" name="passwordConfirmation" placeholder="Confirm your password"
            onChange={handleChange}></input>

          <div className="bg-slate-400/10 p-5 mb-10">
            <p>
              In order to communicate with you more effectively and better understand your preferences and ability to support our work, we may analyse your data. You can request that we stop this at any time by contacting us.

              We will only share your information within the PawHub Group - currently PawHub UK, PawHub Ireland and PawHub Kiribati - and never with a third party.

              We will never send any unsolicited contact - please contact us if you receive such a communication.
            </p>
          </div>
          <div className="border-2 border-pawhub-yellow my-5 p-5 flex md:flex-row">
            <div className="w-1/2 flex flex-col justify-center"><p>
              For over 20 years we&apos;ve promised to do our best to help all our canine friends and to never put a healthy dog to sleep.
            </p></div>
            <div className="flex align-center justify-center w-1/2">
              <p className="txt-xl text-weight-bold">
                The PawHub Promise
              </p>
            </div>
          </div>

          <button className="w-full h-20 bg-pawhub-yellow" type="submit">
            <p className="text-3xl font-extrabold  text-pawhub-grey">Sign Up</p>
          </button>
        </div>

      </form>
    </div>

  )
}

export default Register

