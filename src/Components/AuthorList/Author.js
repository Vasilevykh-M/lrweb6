import {Link} from "react-router-dom";

function AuthorItem(props) {
    return (
        <div>
            <li><Link id = {props.id} to={`/authors/${props.id}`}>{props.fio}</Link></li>
        </div>
    );
}

export default AuthorItem;