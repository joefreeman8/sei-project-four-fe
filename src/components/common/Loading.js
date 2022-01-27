import loading from '../../assets/loading.gif'

function Loading() {
  return (
    <div className="flex flex-col items-center justify-start pt-20 h-screen sm:justify-center">
      <img src={loading} />
      <h1 className="gooddog-font text-5xl">loading...</h1>
    </div>

  )
}

export default Loading
