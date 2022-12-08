import axios from "axios";
import {
    apiLanguages
} from "./reqString"

export const getLanguages = () =>{
    return axios.get(apiLanguages);
}