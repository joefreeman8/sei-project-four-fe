import { ErrorImages } from '../../assets/errors/data'

function Error({ error }) {
  console.log(ErrorImages[0][error])
  console.log(error)
  return (
    <section className="flex justify-center bg-black text-white">
      <div className="flex flex-col w-2/3 items-center" >
        <h2 className="gooddog-font text-3xl pt-5">There seems to have been an error...</h2>
        <img className="object-center" src={ErrorImages[0][error]} />
      </div>
    </section>
  )
}

export default Error
