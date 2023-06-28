import getListCall from "./calls/getListCall";
import updateOneCall from "./calls/updateOneCall";
import deleteOneCall from "./calls/deleteOneCall";
import createOneCall from "./calls/createOneCall";
import getOneCall from "./calls/getOneCall";

/* eslint-disable import/no-anonymous-default-export */
export default (apiUrl) => {
  return {
    getList: (resource, params) => getListCall(resource, params, apiUrl),
    getOne: (resource, params) => getOneCall(resource, params, apiUrl),
    getMany: () => Promise.reject(),
    getManyReference: () => Promise.reject(),
    update: (resource, params) => updateOneCall(resource, params, apiUrl),
    updateMany: () => Promise.reject(),
    create: (resource, params) => createOneCall(resource, params, apiUrl),
    delete: (resource, params) => deleteOneCall(resource, params, apiUrl),
    deleteMany: () => Promise.reject(),
  };
};
