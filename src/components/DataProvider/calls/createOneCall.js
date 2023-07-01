import { ACTION_TYPE_VALUES } from "../../../enum/contentEnum";
import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";


const createOneCall = async (resource, params, apiUrl) => {
    let finalUrl = '';
    let newParams = {}

    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipos`
            newParams = {
                equipo: {...params.data}
            }
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.CREATE).then(
                (res) => {return {data: {id: res.json.equipo.id}}}
            )
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories`
            newParams = {
                category: {...params.data}
            }
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.CREATE).then(
                (res) => {return {data: {id: res.json.category.id}}}
            )
        case PAGES.BRANDS:
            finalUrl = `${apiUrl}/marcas`
            newParams = {
                marca: {...params.data}
            }
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.CREATE).then(
                (res) => {return {data: {id: res.json.marca.id}}}
            )
        case PAGES.BOOKINGS:
            finalUrl = `${apiUrl}/bookings`
            newParams = {
                booking: {...params.data}
            }
            console.log(JSON.stringify(newParams))
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.CREATE).then(
                (res) => {return {data: {id: res.json.booking.id}}}
            )
        default: 
            return Promise.reject();
    }
}

export default createOneCall;