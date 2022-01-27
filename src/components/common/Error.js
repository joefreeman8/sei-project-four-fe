import { ErrorImages } from '../../assets/errors/data'

function Error({ error }) {

  return (
    <section className="flex justify-center bg-black text-white">
      <div className="flex flex-col w-2/3 items-center" >
        
        {error < 500 ? 
          <h2 className="gooddog-font text-3xl pt-5">There seems to have been an error...</h2> :
          <h2 className="gooddog-font text-3xl pt-5">It&apos;s not you, it&apos;s us...</h2>
        }
        <img className="object-center" src={ErrorImages[0][error]} />
      </div>
    </section>
  )
}

export default Error
