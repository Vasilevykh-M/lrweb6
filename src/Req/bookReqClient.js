import axios from "axios";
import {
    apiGetBooks,
    apiGetBook,
    apiPostBook,
    apiPutBook,
    apiDeleteBook
} from "./reqString"

export const getBooks = () =>{
    return axios.get(apiGetBooks).then(resp=>resp.data["result"]);
}
export const getBook = ({params}) =>{
    return axios.get(apiGetBook(params.id)).then(resp=>resp.data["result"]);
}

export const postBook = (id, params) =>{
    return axios.post(apiPostBook(id, params.StateRead, params.NameBook, params.YearBook, params.Language, params.Author));
}

export const putBook = (params) =>{
    return axios.put(apiPutBook(params.StateRead, params.NameBook, params.YearBook, params.Language, params.Author));
}

export const deleteBook = (id) =>{
    return axios.delete(apiDeleteBook(id))
}