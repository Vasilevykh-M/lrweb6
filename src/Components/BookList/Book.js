import {Link} from "react-router-dom";

function BookItem(props) {
    return (
        <>
            <div>
                <div>
                    <Link id = {props.id} to={`/books/${props.id}`}>Название книги: "{props.NameBook}"</Link>
                </div>
                <ul>
                    <li>
                        <div>
                            Год книги: "{props.YearBook}"
                        </div>
                    </li>
                    <li>
                        <div>
                            ФИО Автора: "{props.Author}"
                        </div>
                    </li>
                    <li>
                        <div>
                            Язык: "{props.Language}"
                        </div>
                    </li>
                    <li>
                        <div>
                            {props.StateRead == "true"? "Прочитана": "Не прочитана"}
                        </div>
                    </li>
                </ul>
            </div>
            <br/>
        </>
    );
}

export default BookItem;