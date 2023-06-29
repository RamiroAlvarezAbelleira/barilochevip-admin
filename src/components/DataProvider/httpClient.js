import { fetchUtils } from "ra-core"
import { ACTION_TYPE_VALUES, FETCH_ACTIONS_TYPE_VALUES } from "../../enum/contentEnum"


const httpClient = async (url, params, actionType) => {
    const options = {
        headers: new Headers ({Accept: "application/json"})
    }

    switch(actionType) {
        case ACTION_TYPE_VALUES.CREATE:
            const createInfo = JSON.stringify(params);
            options.body = createInfo;
            options.method = FETCH_ACTIONS_TYPE_VALUES.POST;
            break
        case ACTION_TYPE_VALUES.UPDATE:
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

    try {
        const response = await fetchUtils.fetchJson(url, options);
        return response;
      } catch (error) {
        // Handle error
        console.log(options.body)
        console.error("API request failed:", error);
        throw new Error("API request failed");
      }
}

export {httpClient};