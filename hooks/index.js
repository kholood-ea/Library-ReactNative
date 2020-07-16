import React, { useState, useEffect} from "react";
// import $ from "jquery";



export const useBooks = () => {
  const [books, setBooks] = useState([])
   const fetchBooks = async () => {
      const apiCall = await fetch('https://localhost:44330/api/books/getbook');
      const AllBooks = await apiCall.json();     
        setBooks(AllBooks)    
  
useEffect(()=>{
let mounted=true;
if(mounted){

  fetchBooks();
}
  return()=>mounted=false;
     },[]); 
  return {books, setBooks }
}
}


export const usePersons = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    let mounted=true;
    const fetchppl = async () => {
      const apiCall = await fetch('https://localhost:44330/api/persons/getperson');
      const ppl = await apiCall.json();     
      
      if(mounted){setPersons(ppl)   } 
      }  
      fetchppl()

return()=>mounted=false;
  }, []);
  return { persons, setPersons };

}

export const useProcesses = () => {
  const [processes, setProcesses] = useState([])

  useEffect(() => {

    let mounted=true;
    const fetchBooksBorrowed = async () => {
      const apiCall = await fetch('https://localhost:44330/api/book_borrower/getbook_borrower');
      const BooksBorrowed = await apiCall.json();     
      
      if(mounted){setProcesses(BooksBorrowed)   } 
      }  
      fetchBooksBorrowed()

      // $.ajax({
      //   type: 'GET',
      //   url: 'https://localhost:44330/api/book_borrower/getbook_borrower',
      //   dataType: 'json',
      //   success: function (data) {
      //     JSON.stringify(data)
      //           if(mounted){
      //     setProcesses(data)
      //           }

      //   }
      // })
    
    return()=>mounted=false;
  
  }, []);

  return { processes, setProcesses };

}
