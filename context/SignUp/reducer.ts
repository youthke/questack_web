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
}

type Actions = CreatorsToActions<typeof creators>

const initialState = {
    isLoading: false,
    isInvalid: false,
    name: "",
    mail: "",
    password: "",
    passwordConfirmation: ""
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
            return {...state, passwordConfirmation: actions.payload.passwordConfirmation}
        default:
            throw new Error();
    }
};

export {initialState, reducer}
