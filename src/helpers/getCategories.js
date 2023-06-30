import { httpClient } from "../components/DataProvider/httpClient";


const getCategories = (apiUrl) => {
    httpClient(`${apiUrl}/categories`).then(({headers, json}) => {
        const items = JSON.stringify(
            json.map((i) => ({id: i.id, name: i.name}))
        )
        localStorage.setItem('categories', items)
    })
};

export default getCategories;