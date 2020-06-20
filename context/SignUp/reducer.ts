import * as creators from "./actionCreators";
import * as types from "./actionTypes";
import {CreatorsToActions} from "../creatorToActions";

export type State = {
    isLoading: boolean;
    isInvalid: boolean;
    name: string;
    mail: string;
    password: string;
    passwordConfirmation: string;
    message: string;
    success: boolean;
}

type Actions = CreatorsToActions<typeof creators>

const initialState : State= {
    isLoading: false,
    isInvalid: false,
    name: "",
    mail: "",
    password: "",
    passwordConfirmation: "",
    message: "",
    success: false
};

const reducer = (state: State, actions: Actions) =>{
    switch (actions.type) {
        case types.THROW_REQUEST:
            return {...state, isLoading: true};
        case types.CHANGE_NAME:
            return {...state, name: actions.payload.name};
        case types.CHANGE_MAIL:
            return {...state, mail: actions.payload.mail};
        case types.CHANGE_PASSWORD:
            return {...state, password: actions.payload.password};
        case types.CHANGE_PASSWORD_CONFIRMATION:
            return {...state, passwordConfirmation: actions.payload.passwordConfirmation};
        case types.SUCCESS:
            return {...state, isLoading: false, isInvalid: false, message: actions.payload.message, success: true};
        case types.FAILED:
            return {...state, isLoading: false, isInvalid: true, message: actions.payload.message};
        default:
            throw new Error();
    }
};

export {initialState, reducer}
