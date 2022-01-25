

function Login() {

  return (
    <div className="container bg-stone-300 h-screen w-full mx-auto flex flex-col justify-center">
      <div className="mx-auto">
        <p className="align-center">Login</p>
      </div>
      <form className="bg-stone-700/50 w-2/3 h-1/2 mx-auto">
        <h2>Login</h2>
        <hr></hr>
        <label>Username</label>
        <input
          className=" m-8 block shadow border-2 h-8 w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="username" type="text" name="username" placeholder="Enter your username">
        </input>
        <input className="m-8 blockshadow border-2 h-8 w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pawhub-yellow mb-5" id="passowrd" type="password" name="password" placeholder="password">
        </input>
      </form>

    </div>

  )
}

export default Login