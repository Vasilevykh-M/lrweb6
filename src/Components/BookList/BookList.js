import {useEffect, useState} from "react";
import {
    Link,
    useLoaderData,
} from "react-router-dom";

import {Header} from "../head/head";
import Book from "./Book";
import {getBooks, getBook} from "../../Req/bookReqClient";
import './BookList.css';

const onSearch = (searchLine, setBooks) => {
    getBooks().then(res => setBooks(res));
}

export const BookList = () => {
    const bookData = useLoaderData();
    const [books, setBooks] = useState(bookData);

    return(
        <>
            <Header/>
            <div>
                <Link to={"/books/new"}>Добавить книгу</Link>
            </div>
            <div className="BookList">
                    {books?.map(x =>
                        (<Book
                            id = {x["id"]}
                            NameBook = {x["NameBook"]}
                            YearBook = {x["YearBook"]}
                            Author = {x["Author"]}
                            StateRead = {x["StateRead"].toString()}
                            Language = {x["Language"]}
                        />)
                    )}
            </div>
        </>
    )
}