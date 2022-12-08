import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {postBook} from "../../Req/bookReqClient";
import {getLanguages} from "../../Req/languagesReqClient"
import {getA} from "../../Req/authorReqClient"
import {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './modBook.css';

export const BookEditPage = () => {


    const book_ = useLoaderData();
    const book = book_[0];
    const navigate = useNavigate();

    const [author, setAuthors] = useState([]);

    const [language, setLanguage] = useState([]);

    useEffect(() => {
        getLanguages().then(resp => setLanguage(resp.data["result"]));
    }, []);

    useEffect(() => {
        getA().then(resp => setAuthors(resp.data["result"]));
    }, []);


    const {register, formState: {errors}, handleSubmit} = useForm();

    const notify =() => {
        toast.error("Error" ,{
            position: toast.POSITION.TOP_CENTER
        });
    };
    const onSubmit = (data) => {
        const expr = /^\d{1,4}-\d{2}-\d{2}$/;
        const regex = new RegExp(expr);
        data["YearBook"].match(regex) && data["NameBook"]!="" ? postBook(book.id, data).then(_ => navigate("/")):toast.error("Error not valid date");
    }

    const languages = language?.map((item) => <option value = {item["Language"]} selected={book["Language"] == item["Language"]? "selected":""}> {item["Language"]} </option>);
    const authors = author?.map((item) => <option value = {item["FIO"]} selected={book["Author"] == item["FIO"]? "selected":""}> {item["FIO"]} </option>);


    return (
        <>
            <form className="main" onSubmit={handleSubmit(onSubmit)}>
                <div className="ch">
                    <label>
                        Название книги
                    </label>
                        <input {...register("NameBook")} defaultValue={book["NameBook"]}/>

                </div>
                <div className="ch">
                    <label>
                        Статус прочтения
                    </label>
                        <select {...register("StateRead")}>
                            <option value = {true} selected={book["StateRead"] == true? "selected":""}> true </option>
                            <option value = {false} selected={book["StateRead"] == false? "selected":""}> false </option>
                        </select>


                </div>
                <div className="ch">
                    <label>
                        Год выхода книги
                    </label>
                        <input {...register("YearBook", )} type="datetime" defaultValue={book["YearBook"]}/>
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
                        <select {...register("Language")} defaultValue={book["Language"]}>
                            {languages}
                        </select>

                </div>
                <div className="ch">
                    <label>
                        ФИО Автора
                    </label>
                        <select {...register("Author")} defaultValue={book["Author"]}>
                            {authors}
                        </select>

                </div>
                <input type="submit" value={"Сохранить"}/>
            </form>
            <Link to={"/"}>На главную</Link>
        </>
    );
}