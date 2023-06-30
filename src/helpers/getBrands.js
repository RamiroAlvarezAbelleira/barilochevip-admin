import { httpClient } from "../components/DataProvider/httpClient";


const getBrands = (apiUrl) => {
    httpClient(`${apiUrl}/marcas`).then(({headers, json}) => {
        const items = JSON.stringify(
            json.map((i) => ({id: i.id, name: i.name}))
        )
        localStorage.setItem('marcas', items)
    })
};

export default getBrands;