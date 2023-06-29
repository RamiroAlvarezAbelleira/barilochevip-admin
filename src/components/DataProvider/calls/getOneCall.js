import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";


const getOneCall = async (resource, params, apiUrl) => {
    let finalUrl = '';

    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipos/${params.id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            })
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories/${params.id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            })
        case PAGES.BRANDS:
            finalUrl = `${apiUrl}/marcas/${params.id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            })
        default:
            return Promise.reject();
    }

}

export default getOneCall;