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
            console.log(`Parametros que llegan al createOneCalle ${newParams}`)
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.CREATE).then(
                (res) => (console.log('esta es la respuesta ' + res))
            )
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories`
            newParams = {
                category: {...params.data}
            }
            console.log(`Parametros que llegan al createOneCalle ${JSON.stringify(newParams)}`)
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.CREATE).then(
                (res) => {return {data: {id: res.json.category.id}}}
            )
        default: 
            return Promise.reject();
    }
}

export default createOneCall;