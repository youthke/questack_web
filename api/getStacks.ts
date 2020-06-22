import {Stack} from "../model/stack";
import {Axios} from "./config";

type response = {
    stacks: Stack[];
    message: string;
};

export const getStacks = async (token: string): Promise<response> =>{
    const resp = await Axios.get("/stacks",{
        headers: {
            Authorization: token
        }
    });
    return resp.data;
};