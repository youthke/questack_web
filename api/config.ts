import axios from "axios"

const resolvedServer = (() =>{
   return process.env.server;
})();

export const Axios = axios.create({
    baseURL: resolvedServer,
    timeout: 5000
});