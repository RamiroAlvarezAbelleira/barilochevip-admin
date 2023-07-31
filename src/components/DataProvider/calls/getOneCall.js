import { PAGES } from "../../../enum/pagesEnum";
import getBookings from "../../../helpers/getBookings";
import { httpClient } from "../httpClient";


const getOneCall = async (resource, params, apiUrl) => {
    let finalUrl = '';
    const {id} = params

    switch(resource) {
        case PAGES.EQUIPMENT:
            getBookings(apiUrl, id)
            finalUrl = `${apiUrl}/equipos/${id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                let newEquipo = {};
                let newImages = [];
                json.images.forEach(image => {
                    const startIndex = image.image_url.indexOf('/rails/');
                    const cutString = image.image_url.substring(startIndex);
                    newImages.push({image_url: `https://barilochevip-be-production.up.railway.app${cutString}`})
                })
                newEquipo = {...json, images: newImages}
                return {data: newEquipo}
            })
        case PAGES.CATEGORIES:
            finalUrl = `${apiUrl}/categories/${id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            })
        case PAGES.BRANDS:
            finalUrl = `${apiUrl}/marcas/${id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            })
        case PAGES.BOOKINGS:
            finalUrl = `${apiUrl}/bookings/${id}`
            return httpClient(finalUrl).then(({headers, json}) => {
                return {data: json.data}
            })
        default:
            return Promise.reject();
    }

}

export default getOneCall;