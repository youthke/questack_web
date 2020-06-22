import * as creators from "./actionCreators";
import * as types from "./actionTypes";
import {CreatorsToActions} from "../../creatorToActions";

export type State = {
    name: string;
    token: string;
    isLoading: boolean;
    isInvalid: boolean;
    success: boolean;
}

type Actions = CreatorsToActions<typeof creators>


const initialState : State = {
    name: "",
    token: "",
    isLoading: false,
    isInvalid: false,
    success: false
};

const reducer = (state: State, actions: Actions) => {
    switch (actions.type) {
        case types.THROW_REQUEST:
            return {...state, isLoading: true};
        case types.CHANGE_NAME:
            return {...state, name: actions.payload.name};
        case types.SET_TOKEN:
            return {...state, token: actions.payload.token};
        case types.SUCCESS:
            return {...state, isLoading: false, success: true};
        case types.FAILED:
            return {...state, isLoading: false, isInvalid: true};
    }
};

export {initialState, reducer};