import { ACTION_TYPE_VALUES } from "../../../enum/contentEnum";
import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";

const updateOneCall = async (resource, params, apiUrl) => {
    let finalUrl = '';
    let newParams = {}

    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipos`
            newParams = {
                equipo: {...params.data}
            }
            console.log(`Parametros que llegan al updateOneCalle ${newParams}`)
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.UPDATE).then(
                (res) => {
                    return {data: {id: params.id}}
                }
            )
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories/${params.id}`
            newParams = {
                category: {name: params.data.name}
            }
            console.log(`Parametros que llegan al updateOneCalle ${JSON.stringify(newParams)}`)
            return httpClient(finalUrl, newParams, ACTION_TYPE_VALUES.UPDATE).then(
                (res) => {
                    return {data: {id: params.id}}
                }
            )
        default: 
            return Promise.reject();
    }
}
export default updateOneCall