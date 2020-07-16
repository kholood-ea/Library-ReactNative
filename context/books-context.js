import React, { createContext, useContext} from 'react';
import {useBooks} from '../hooks'

export const BooksContext=createContext();
export const BooksProvider = ({children}) => {
    const{books,setBooks}=useBooks();

    return(
        <BooksContext.Provider value ={{books,setBooks}}>
        {children}
        </BooksContext.Provider>

    )
}
export const useBooksValue=()=>useContext(BooksContext)
