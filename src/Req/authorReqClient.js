import axios from "axios";
import {apiGetAuthors, apiGetAuthor, apiPostAuthor, apiPutAuthor, apiDeleteAuthor} from "./reqString";
// Получить авторов
export const getAuthors = () =>{
    return axios.get(apiGetAuthors).then(resp=>resp.data["result"]);
};

export const getA = () =>{
    return axios.get(apiGetAuthors);
}
//Получить автора
export const getAuthor = ({ params }) => {
    return axios.get(apiGetAuthor(params.id)).then(resp=>resp.data["result"]);
};
//Изменить автора
export const postAuthor = (id, params) => {
    return axios.post(apiPostAuthor(id, params.fio, params.birthday, params.biography));
};
//Добавить автора
export const putAuthor = (params) => {
    return axios.put(apiPutAuthor(params.fio, params.birthday, params.biography))
}

export const deleteAuthor = (id) => {
    return axios.delete(apiDeleteAuthor(id));
};