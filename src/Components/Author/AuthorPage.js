import {Link, useLoaderData, useNavigate} from "react-router-dom";

import {deleteAuthor} from "../../Req/authorReqClient";
import QRCode from "react-qr-code";
import "./AuthorPage.css";

export const AuthorPage = () => {
    const auth = useLoaderData();
    const author = auth[0];
    const navigate = useNavigate();
    console.log(author["Biography"]);
    const expr = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const regex = new RegExp(expr);


    return (
        <>
            <div className="div1">
                <div>
                    <h1>{author["FIO"]}</h1>
                </div>
                <div>{author["Birthday"]}</div>
                {author["Biography"].match(regex) ? <QRCode value={author["Biography"]}/> :
                    <div>{author["Biography"]}</div>}
            </div>
            <div className="div2">
                <Link to={`edit`}>Изменить</Link>
                <Link to={"/authors"}>На главную</Link>
                <Link to={"/authors"} onClick={() => {
                    deleteAuthor(author["id"]).then(_ => navigate("/authors"))
                }}>Удалить</Link>
            </div>
        </>
    );
}