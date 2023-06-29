import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";


const getListCall = async (resource, params, apiUrl) => {
    let finalUrl = '';

    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipos`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            }) 
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json, total: json.length}
            }) 
        default: 
            return Promise.reject();
    }
}

export default getListCall;