import { ACTION_TYPE_VALUES } from "../../../enum/contentEnum";
import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";


const deleteOneCall = async (resource, params, apiUrl) => {
    let finalUrl = '';
    let id = params.id;
    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipos/${id}`
            return httpClient(finalUrl, params, ACTION_TYPE_VALUES.DELETE).then(
                (res) => ({data: {id}})
            )
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories/${id}`
            return httpClient(finalUrl, params, ACTION_TYPE_VALUES.DELETE).then(
                (res) => ({data: {id}})
            )
        case PAGES.BRANDS:
            finalUrl = `${apiUrl}/marcas/${id}`
            return httpClient(finalUrl, params, ACTION_TYPE_VALUES.DELETE).then(
                (res) => ({data: {id}})
            )
        case PAGES.BOOKINGS:
            finalUrl = `${apiUrl}/bookings/${id}`
            return httpClient(finalUrl, params, ACTION_TYPE_VALUES.DELETE).then(
                (res) => {return {data: {id}}}
            )
        default: Promise.reject();
    }
}

export default deleteOneCall;