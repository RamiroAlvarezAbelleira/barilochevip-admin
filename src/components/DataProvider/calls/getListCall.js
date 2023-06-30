import { PAGES } from "../../../enum/pagesEnum";
import getBrands from "../../../helpers/getBrands";
import getCategories from "../../../helpers/getCategories";
import { httpClient } from "../httpClient";


const getListCall = async (resource, params, apiUrl) => {
    let finalUrl = '';

    switch(resource) {
        case PAGES.EQUIPMENT:
            getCategories(apiUrl)
            getBrands(apiUrl)
            finalUrl = `${apiUrl}/equipos`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json, total: json.length}
            }) 
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json, total: json.length}
            }) 
        case PAGES.BRANDS:
            finalUrl = `${apiUrl}/marcas`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json, total: json.length}
            }) 
        default: 
            return Promise.reject();
    }
}

export default getListCall;