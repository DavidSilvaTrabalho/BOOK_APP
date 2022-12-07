import {React, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import getBooks from '../services/api';

function Edit() {
    
    const { pathname } = useLocation()
    const id = pathname.slice(5).split("/")[1]
    const [getOne, setGetOne] = useState([])
    
    useEffect(() => {
        (async () => {
            console.log( await getBooks.getBooksById(id))
        })
    })
    
    const handleSubmitForm = (e) => e.preventDefault();
    
    return(
    <>
        <h2>Edit book</h2>
        <form onSubmit={handleSubmitForm}>
            {/* <input type="text" value={""}/> */}
        </form>
    </>
  ) 

}
export default Edit;