import { fetchUtils } from "ra-core"
import { ACTION_TYPE_VALUES, FETCH_ACTIONS_TYPE_VALUES } from "../../enum/contentEnum"
import axios from "axios"


const httpClient = async (url, params, actionType) => {
    const token = localStorage.getItem("token")
    const options = {
        headers: new Headers ({Accept: "application/json",Authorization: token})
    }

    switch(actionType) {
        case ACTION_TYPE_VALUES.CREATE:
            if (params?.equipo) {
                const formData = new FormData();
                formData.append("equipo[name]", params.equipo.name);
                formData.append("equipo[price]", params.equipo.price);
                formData.append("equipo[description]", params.equipo.description);
                formData.append("equipo[stock_total]", params.equipo.stock_total);
                formData.append("equipo[category_id]", params.equipo.category_id);
                formData.append("equipo[marca_id]", params.equipo.marca_id);
                
                // Append image files to the formData
                if (params.equipo.images && params.equipo.images.length > 0) {
                    params.equipo.images.forEach((image, index) => {
                        formData.append(`equipo[images][]`, image.rawFile);;
                    });
                }
                axios.post("http://[::1]:3000/api/v1/equipos", formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      "Authorization": token
                    }
                  }).then(response => {
                    console.log('response ' + JSON.stringify(response))
                  }).catch(error => {
                    console.log('error ' + JSON.stringify(error))
                  });
                  break
            }
            const createInfo = JSON.stringify(params);
            options.body = createInfo;
            options.method = FETCH_ACTIONS_TYPE_VALUES.POST;
            break;
        case ACTION_TYPE_VALUES.UPDATE:
            if (params?.equipo) {
                const formData = new FormData();
                formData.append("equipo[name]", params.equipo.name);
                formData.append("equipo[price]", params.equipo.price);
                formData.append("equipo[description]", params.equipo.description);
                formData.append("equipo[stock_total]", params.equipo.stock_total);
                formData.append("equipo[category_id]", params.equipo.category_id);
                formData.append("equipo[marca_id]", params.equipo.marca_id);
                
                // Append image files to the formData
                if (params.equipo.images && params.equipo.images.length > 0 && params.equipo.images[0].rawFile) {
                    params.equipo.images.forEach((image, index) => {
                        formData.append(`equipo[images][]`, image.rawFile);;
                    });
                }
                axios.put(url, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      "Authorization": token
                    }
                  }).then(response => {
                    console.log('response ' + JSON.stringify(response))
                  }).catch(error => {
                    console.log('error ' + JSON.stringify(error))
                  });
                  break
            }
            const updateInfo = JSON.stringify(params);
            options.body = updateInfo;
            options.method = FETCH_ACTIONS_TYPE_VALUES.PUT;
            break
        case ACTION_TYPE_VALUES.DELETE:
            options.method = FETCH_ACTIONS_TYPE_VALUES.DELETE;
            break
        default:
            break
    }
    if (!params?.equipo){
    try {
        const response = await fetchUtils.fetchJson(url, options);
        return response;
      } catch (error) {
        // Handle error
        console.error("API request failed:", error.message);
        throw new Error(`API request failed ${error.message}`);
      }}
}

export {httpClient};