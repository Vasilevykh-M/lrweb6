import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {getAuthor, getAuthors} from "./Req/authorReqClient";
import {AuthorsList} from "./Components/AuthorList/AuthorList";
import ErrorPage from "./Components/ErrorPage";
import {BookList} from "./Components/BookList/BookList";
import {AuthorPage} from "./Components/Author/AuthorPage";
import {getBook, getBooks} from "./Req/bookReqClient";
import {BookPage} from "./Components/Book/BookPage";
import {AuthorEditPage} from "./Components/Author/ModAuthorPage";
import {BookEditPage} from "./Components/Book/ModBookPage";
import {AuthorAddPage} from "./Components/Author/AddAuthorPage";
import {BookAddPage} from "./Components/Book/AddBookPage";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/authors",
        element: <AuthorsList/>,
        loader: getAuthors,
        errorElement: <ErrorPage />
    },
    {
        path: "/",
        element: <BookList/>,
        loader: getBooks,
        errorElement: <ErrorPage />
    },
    {
        path: "/authors/:id",
        element: <AuthorPage/>,
        loader: getAuthor,
        errorElement: <ErrorPage />,
    },
    {
        path: "/books/:id",
        element: <BookPage/>,
        loader: getBook,
        errorElement: <ErrorPage />,
    },
    {
        path: "/authors/:id/edit",
        element: <AuthorEditPage/>,
        loader: getAuthor,
        errorElement: <ErrorPage />,
    },
    {
        path: "/books/:id/edit",
        element: <BookEditPage/>,
        loader: getBook,
        errorElement: <ErrorPage />,
    },
    {
        path: "/authors/new",
        element: <AuthorAddPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/books/new",
        element: <BookAddPage/>,
        errorElement: <ErrorPage />,
    },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
