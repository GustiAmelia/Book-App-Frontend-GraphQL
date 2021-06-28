import React from 'react';
import { useQuery } from "@apollo/client";
import { getAllBook } from '../queries/queries';

function BookList() {
  
  const {data, loading} = useQuery(getAllBook);

  let displayBooks;
  if(loading){
    displayBooks = <div>Loading books...</div>
  } else {
    displayBooks = data.books.map((book, index) =>{
      return (
        <li key={index}>{book.name}</li>
      )
    })
  }
  
  return (
    <div>
      <ui>
        {displayBooks}
      </ui>
    </div>
  )
}

export default BookList
