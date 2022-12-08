import {useEffect, useState} from "react";
import {
    Link,
    useLoaderData,
} from "react-router-dom";

import {Header} from "../head/head";
import Author from "./Author";
import './AuthorList.css';


export const AuthorsList = () => {
    const data = useLoaderData();
    const [authors, setAuthors] = useState(data);

    return(
        <>
            <Header/>
            <div>
                <Link to = {"/authors/new"}>Добавить автора</Link>
            </div>
            <div className="ListAuthors">
                <ul>
                    {authors?.map(x =>
                        (<Author
                            id = {x["id"]}
                            fio = {x["FIO"]}
                        />)
                    )}
                </ul>
            </div>
        </>
    )
}
