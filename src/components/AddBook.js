import React from 'react';
import { useQuery } from "@apollo/client";
import { getAllAuthor } from '../queries/queries';


function AddBook() {
  const {data, loading} = useQuery(getAllAuthor);
  
  let displayAuthors;
  if(loading){
    displayAuthors = <option>Loading authors...</option>
  } else {
    displayAuthors = data.authors.map((author, index) => {
      return (
        <option key={index} value={author.id}>{author.name}</option>
      )
    })
  }
  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text'/>
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input type='text'/>
      </div>

      <div className='field'>
        <label>Author:</label>
        <select>
          <option>select author</option>
          {displayAuthors}
        </select>
      </div>

      <button>+</button>
    </form>
  )
}

export default AddBook
