import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {putBook} from "../../Req/bookReqClient";
import {getLanguages} from "../../Req/languagesReqClient"
import {getA} from "../../Req/authorReqClient"
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './addBook.css';

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const inital = JSON.parse(saved);
    console.log(inital);
    console.log(defaultValue);
    return inital || defaultValue;
}
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(()=>{
        return getStorageValue(key, defaultValue);
    });
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, );
    return [value, setValue];
}

export const BookAddPage = () => {

    const navigate = useNavigate();

    const [author, setAuthors] = useState([]);

    const [language, setLanguage] = useState([]);

    useEffect(() => {
        getLanguages().then(resp => setLanguage(resp.data["result"]));
    }, [] );

    useEffect(() => {
        getA().then(resp => setAuthors(resp.data["result"]));
    }, [] );


    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const expr = /^\d{1,4}-\d{2}-\d{2}$/;
        const regex = new RegExp(expr);

        data["YearBook"].match(regex) && data["NameBook"]!="" ?  putBook(data).then(_ => navigate("/")) : toast.error("Error not valid data");
    }

    const [book, setBook] = useLocalStorage("book",
        {
            "NameBook": "AAA",
            "StateRead": true,
            "YearBook": "2002-12-12",
            "Language": language[0],
            "Author": author[0]
        })

    const languages = language?.map((item) => <option value = {item["Language"]} selected={book["Language"] == item["Language"]? "selected":""}> {item["Language"]} </option>);
    const authors = author?.map((item) => <option value = {item["FIO"]} selected={book["Author"] == item["FIO"]? "selected":""}> {item["FIO"]} </option>);

    function changeName(event) {
        const obj = book;
        obj["NameBook"] = event.target.value;
        console.log(book);
        setBook(obj);
    }

    function changeState(event) {
        const obj = book;
        obj["StateRead"] = event.target.value;
        console.log(book);
        setBook(obj);
    }

    function changeYear(event) {
        const obj = book;
        obj["YearBook"] = event.target.value;
        console.log(book);
        setBook(obj);
    }

    function changeLang(event) {
        const obj = book;
        obj["Language"] = event.target.value;
        console.log(book);
        setBook(obj);
    }

    function changeAuth(event) {
        const obj = book;
        obj["Author"] = event.target.value;
        console.log(book);
        setBook(obj);
    }


    return (
        <>
            <form className="main" onSubmit={handleSubmit(onSubmit)}>
                <div className="ch">
                    <label>
                        Название книги
                    </label>
                        <input {...register("NameBook")} onChange={changeName} placeholder="Введите название книги" defaultValue={book["NameBook"]}/>

                </div>
                <div className="ch">
                    <label>
                        Статус прочтения
                    </label>
                        <select {...register("StateRead")} onChange={changeState} placeholder="Введите статус прочтения">
                            <option value = {true} selected={book["StateRead"] == true? "selected":""}> true </option>
                            <option value = {false} selected={book["StateRead"] == false? "selected":""}> false </option>
                        </select>

                </div>
                <div className="ch">
                    <label>
                        Год выхода книги
                    </label>
                        <input {...register("YearBook", )}  onChange={changeYear} placeholder="Введите год выхода книги" defaultValue={book["YearBook"]}/>
                        <ToastContainer
                            autoClose={5000}
                            closeOnClick
                            pauseOnFocusLoss
                            position="top-right"
                        />

                </div>
                <div className="ch">
                    <label>
                        Язык
                    </label>
                        <select {...register("Language")} onChange={changeLang} placeholder="Введите язык">
                            {languages}
                        </select>

                </div>
                <div className="ch">
                    <label>
                        ФИО Автора
                    </label>
                        <select {...register("Author")} onChange={changeAuth} placeholder="Введите ФИО Автора"  defaultValue={book["Author"]}>
                            {authors}
                        </select>

                </div>
                <input type="submit" value={"Сохранить"}/>
            </form>
            <Link to={"/"}>На главную</Link>
        </>
    );
}