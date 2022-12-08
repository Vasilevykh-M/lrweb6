import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {postAuthor, putAuthor} from "../../Req/authorReqClient";
import {toast, ToastContainer} from "react-toastify";
import "./addAuthor.css";
export const AuthorAddPage = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const expr = /^\d{1,4}-\d{2}-\d{2}$/;
        const regex = new RegExp(expr);
        data["birthday"].match(regex) && data["fio"]!="" ?
            putAuthor(data).then(_ => navigate("/authors")) : toast.error("Error not valid data");
    }

    return (
        <>
            <form className="main" onSubmit={handleSubmit(onSubmit)}>
                <div className="ch">
                    <label>
                        ФИО
                    </label>
                        <input {...register("fio")} placeholder="Введите ФИО"/>

                </div>
                <div className="ch">
                    <label>
                        Год рождения
                    </label>
                        <input {...register("birthday")} type="datetime" placeholder="Введите год рождения"/>
                        <ToastContainer
                            autoClose={5000}
                            closeOnClick
                            pauseOnFocusLoss
                            position="top-right"
                        />

                </div>
                <div className="ch">
                    <label>
                        Биография
                    </label>
                        <input {...register("biography")} placeholder="Введите биографию"/>

                </div>
                <input type="submit" value={"Сохранить"}/>
            </form>
            <Link to={"/authors"}>На главную</Link>
        </>
    );
}