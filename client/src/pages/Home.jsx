import { useState, useEffect } from 'react'
import getBooks from '../services/api.js'
import {Link} from 'react-router-dom'
import {TfiImage} from 'react-icons/tfi'

function Home() {
  const [data, setData] = useState([])

  useEffect( () => {
    getReturnData()
  },[])

  const getReturnData = async () => {
    const resultRequest = await getBooks.getAllBooks()
    setData( resultRequest)
  }

  return (
    <main>
      <section className='container'>
      {data?.map((element) => {
        console.log(element);
          return (
            <div className='card' key={element.book_id}>
              <h2 className='card-title'>{element.book_title}</h2>
              
              {element.book_cover_url ? 
              <img className='bookcover' src={element.book_cover_url} /> : <TfiImage/>
              }
              <p className='card-desc'>{element.book_description}</p>
              <span className='containerbutton'>
                <Link to={`/edit/${element.book_id}`}>
                  <button className='button-card'>Edit</button>
                </Link>
                <Link to="/delete">
                  <button className='button-card'>Delete</button> 
                </Link>
              </span>
            </div>
          )
        })}
      </section>        
    </main>
  )
}

export default Home
