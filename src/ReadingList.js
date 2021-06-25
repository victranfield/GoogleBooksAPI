import React, { Component } from 'react';
import ReadingListHeader from './ReadingListHeader';
import BookList from './BookList';

class ReadingList extends Component {

    render() {

        const sortedBooks = JSON.parse(localStorage.getItem('reading_list')) || []
        console.log(sortedBooks)
        //if reading list in state is empty - get local storage

        if(sortedBooks.length === 0) {
            return <div></div>
        } else {
            return (
    
                <div>
                    
                    <ReadingListHeader/>
                
                    <BookList  books={sortedBooks}/>

                    
                </div>
            );

        }
  
    }

}

export default ReadingList;