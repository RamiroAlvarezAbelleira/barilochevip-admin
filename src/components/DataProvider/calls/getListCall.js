import { PAGES } from "../../../enum/pagesEnum";
import { httpClient } from "../httpClient";


const getListCall = async (resource, params, apiUrl) => {
    let finalUrl = '';

    switch(resource) {
        case PAGES.EQUIPMENT:
            finalUrl = `${apiUrl}/equipment`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            }) 
        default: 
            return Promise.reject();
    }
}

export default getListCall;