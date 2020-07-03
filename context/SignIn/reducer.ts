import * as creators from "./actionCreators"
import * as types from "./actionTypes"
import {CreatorsToActions} from "../creatorToActions";

export type State = {
    isLoading: boolean;
    isInvalid: boolean;
    mail: string;
    password: string;
    message: string;
    success: boolean;
}

type Actions = CreatorsToActions<typeof creators>

const initialState = {
    isLoading: false,
    isInvalid: false,
    mail: "",
    password: "",
    message: "",
    success: false
};

const reducer = (state: State, actions: Actions) =>{
    switch (actions.type) {
        case types.THROW_POST_REQUEST:
            return {...state, isLoading: true};
        case types.CHANGE_MAIL:
            return {...state, mail: actions.payload.mail};
        case types.CHANGE_PASSWORD:
            return {...state, password: actions.payload.password};
        case types.SUCCESS:
            return {...state, isLoading: false, success: true, message: actions.payload.message};
        case types.FAILED:
            return {...state, isLoading: false, isInvalid: true, message: actions.payload.message};
        default:
            throw new Error();
    }
};

export {initialState, reducer}