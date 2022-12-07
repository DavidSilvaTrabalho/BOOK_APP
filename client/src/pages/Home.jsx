import { useState, useEffect } from 'react'
import getBooks from '../services/api.js'
import {Link} from 'react-router-dom'

function Home() {
  const [data, setData] = useState(null)

  useEffect( () => {
    ( async function () {
      setData(await getBooks.getAllBooks())
    })()
  },[])
  return (
    <>
      <div className='container'>
        {data?.map((element) => {
          return (
            <div className='card' key={element.book_id}>
              <h2>{element.book_title}</h2>
              <img src={element.book_cover_url} />
              <p>{element.book_description}</p>
              <span>
                <Link to={`/edit/${element.book_id}`} className='button-card'>
                  Edit
                </Link>
                <Link to="/delete" className='button-card'>
                  Delete
                </Link>
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
