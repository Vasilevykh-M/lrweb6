import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {postAuthor} from "../../Req/authorReqClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./modAuthor.css";

export const AuthorEditPage = () => {
    const auth = useLoaderData();
    const author = auth[0];
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const expr = /^\d{1,4}-\d{2}-\d{2}$/;
        const regex = new RegExp(expr);
        data["birthday"].match(regex) && data["fio"]!="" ?
            postAuthor(author.id, data).then(_ => navigate("/authors")) : toast.error("Error not valid data");
    }

    return (
        <>
            <form className="main" onSubmit={handleSubmit(onSubmit)}>
                <div className="ch">
                    <label>
                        ФИО
                    </label>
                        <input {...register("fio")} defaultValue={author["FIO"]}/>

                </div>
                <div className="ch">
                    <label>
                        Год рождения
                    </label>
                        <input {...register("birthday")} type="datetime" defaultValue={author["Birthday"]}/>
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
                        <input {...register("biography")} defaultValue={author["Biography"]}/>
                </div>
                <input type="submit" value={"Сохранить"}/>
            </form>
            <Link to={"/authors"}>На главную</Link>
        </>
    );
}