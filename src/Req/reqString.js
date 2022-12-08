export const host = "http://localhost:5000";
export const apiVersion = "api/v1/dictionary";

// получить авторов
export const apiGetAuthors = `${host}/${apiVersion}/Authors`;
//получить конкретного автора
export const apiGetAuthor = (id) => `${host}/${apiVersion}/author?id=${id}`;
//изменить автора
export const apiPostAuthor = (id, fio, birthday, biography) => `${host}/${apiVersion}/authors/mod?id=${id}&fio=${fio}&birthday=${birthday}&biography=${biography}`;
//добавить автора
export const apiPutAuthor = (fio, birthday, biography) => `${host}/${apiVersion}/authors/add?fio=${fio}&birthday=${birthday}&biography=${biography}`;
//удалить автора
export const apiDeleteAuthor =(id) => `${host}/${apiVersion}/authors/delete?id=${id}`;



// получить книги
export const apiGetBooks = `${host}/${apiVersion}/Books`;
//получить конкретную книгу
export const apiGetBook = (id)=> `${host}/${apiVersion}/book?id=${id}`;
//изменить автора
export const apiPostBook = (id, state_read, name_book , year_book, language, fio) =>
    `${host}/${apiVersion}/books/mod?id=${id}&state_read=${state_read}&name_book=${name_book}&year_book=${year_book}&language=${language}&fio=${fio}`;
//создать автора
export const apiPutBook =(state_read, name_book, year_book, language, fio) =>
    `${host}/${apiVersion}/books/add?state_read=${state_read}&name_book=${name_book}&year_book=${year_book}&language=${language}&fio=${fio}`;
//удалить автора
export const apiDeleteBook = (id) => `${host}/${apiVersion}/book/delete?id=${id}`;


export const apiBookAuthor = (fio) => `${host}/${apiVersion}/author_book?fio=${fio}`;
export const apiBookRead = (language) => `${host}/${apiVersion}/not_read_book?languages=${language}`;


export const apiLanguages =  `${host}/${apiVersion}/Languages`;
export const apiPostLanguage = (language) =>`${host}/${apiVersion}/languages/add?language=${language}`;

