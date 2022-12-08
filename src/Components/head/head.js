import {Link} from "react-router-dom";
import './head.css';

export const Header = () => {
    return (
        <div className="head">
            <Link to={"/"}>Книги</Link>
            <Link to={"/authors"}>Авторы</Link>
        </div>
    )
}