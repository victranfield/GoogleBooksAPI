import React from 'react';
import './BookCard.css';

const BookCard = (props) => {

    const onChange = event => {
        // console.log(event.currentTarget.checked)

        let books = JSON.parse(localStorage.getItem('reading_list')) || []
        //if reading list in state is empty - get from local storage

        //retrieving then setting

        //assigns books to empty array
        //loading current readinglist
        //getItem returns string - need an array
        //JSON parse to array
        //first time on page - readinglist is null, because no previous items are stored
        //added or array so it has a default value


        // const newBook = {title: props.volumeInfo.title, author: props.author, publisher: props.publisher, cover: props.imageLinks.thumbnail}
        
        const newBook = {
            volumeInfo: {title: props.title, authors: props.author, publishedDate: props.publishedDate, imageLinks: {thumbnail: props.image}}
        }
        //object with data needed
     
        console.log(JSON.stringify(newBook))

        books.push(newBook)

        //books - empty array
        //pushing newBook into empty array

        console.log(books)

        localStorage.setItem('reading_list', JSON.stringify(books)) //setting full array to local storage
        //set state here - re render reading list
        
        //trigger event
        //event listener in readinglist - retriggers

        //stringify newbook - into array containing only the newbook
        //when clicking on checkbox first time - line 19

        //second click on checkbox - new newbook
        //9 - instead of empty array - will have array with previous books added to array
        //reading_list/consistent/getting/setting


    }

    return (

    <div className="card-container">
        <img src={props.image} alt=""/>
        <div className="desc">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.publishedDate}</p>
        </div>

        <br/>

        <input type="checkbox" id={props.id} onChange={onChange}></input>
        <label for={props.id}> Save to reading list</label><br></br>

    </div>

    );
}

export default BookCard;