import React, { Component } from 'react';
import SearchArea from './SearchArea';
import BookList from './BookList';
import request from 'superagent';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.state.searchField })
            .then((data) => {
                console.log(data)
                const cleanData = this.cleanData(data)
                this.setState({books: cleanData})
                console.log(data);
                console.log(cleanData)
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        console.log(e.target.value);
        this.setState({sort: e.target.value })
    }

    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';                     //0000 - default value
            }

            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://i.imgur.com/tisbV2F.jpeg'}                   //setting to object - property is an object
            }

            return book;
        })

        return cleanedData;
    }

        render() {
            const sortedBooks = this.state.books.sort((a, b) => {
                if(this.state.sort === "Newest") {
                    return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
                } else {
                    return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
                }
                
            })
            // console.log(sortedBooks)
        
            return (
            
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                <BookList  books={sortedBooks}/>
            </div>
        );
    }

}

export default Books;
