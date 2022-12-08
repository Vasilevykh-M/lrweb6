import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {deleteBook} from "../../Req/bookReqClient";
export const BookPage = () => {
    const book_ = useLoaderData();
    const book = book_[0];
    const navigate = useNavigate();

    return (
        <>
            <div className="div1">
                <div><h1>{book["NameBook"]}</h1></div>
                <div>{book["YearBook"]}</div>
                <div>{book["Language"]}</div>
                <div>{book["StateRead"].toString()}</div>
                <div>{book["Author"]}</div>

            </div>
            <div className="div2">
                <Link to={`edit`}>Изменить</Link>
                <Link to={"/"}>На главную</Link>
                <Link to={"/authors"} onClick={() => {deleteBook(book["id"]).then(_ => navigate("/"))}}>Удалить</Link>
            </div>
        </>
    );
}