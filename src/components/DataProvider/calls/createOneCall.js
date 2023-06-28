import { ACTION_TYPE_VALUES } from "../../../enum/contentEnum";
import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";


const createOneCall = async (resource, params, apiUrl) => {
    let finalUrl = '';

    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipos`
            let newParams = JSON.stringify(params)
            console.log(`Parametros que llegan al createOneCalle ${newParams}`)
            return httpClient(finalUrl, params, ACTION_TYPE_VALUES.CREATE).then(
                (res) => (console.log('esta es la respuesta ' + res))
            )
        default: 
            return Promise.reject();
    }
}

export default createOneCall;