import * as creators from "./actionCreators"
import * as types from "./actionTypes"
import {CreatorsToActions} from "../creatorToActions";

export type State = {
    isLoading: boolean;
    isInvalid: boolean;
    mail: string;
    password: string;
}

type Actions = CreatorsToActions<typeof creators>

const initialState = {
    isLoading: false,
    isInvalid: false,
    mail: "",
    password: ""
};

const reducer = (state: State, actions: Actions) =>{
    switch (actions.type) {
        case types.THROW_POST_REQUEST:
            return {...state, isLoading: true};
        case types.CHANGE_MAIL:
            return {...state, mail: actions.payload.mail};
        case types.CHANGE_PASSWORD:
            return {...state, password: actions.payload.password};
        default:
            throw new Error();
    }
};

export {initialState, reducer}