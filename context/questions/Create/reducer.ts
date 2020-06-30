import * as creator from "./actionCreators";
import * as types from "./actionTypes";
import { CreatorsToActions } from "../../creatorToActions";

export type State = {
    isLoading: boolean;
    isInvalid: boolean;
    title: string;
    content: string;
    questionerName: string;
    stackID: string;
    message: string;
    success: boolean;
}


type Actions = CreatorsToActions<typeof creator>

const initialState: State = {
    isLoading: false,
    isInvalid: false,
    title: "",
    content: "",
    questionerName: "",
    stackID: "",
    message: "",
    success: false
};

const reducer = (state: State, actions: Actions) =>{
    switch (actions.type) {
        case types.CREATE_QUESTION_SET_STACK_ID:
            return {...state, stackID: actions.payload.id};
        case types.THROW_POST_REQUEST:
            return {...state, isLoading: true};
        case types.CHANGE_QUESTIONER_NAME:
            return {...state, name: actions.payload.name};
        case types.CHANGE_QUESTION_TITLE:
            return {...state, title: actions.payload.title};
        case types.CHANGE_QUESTION_CONTENT:
            return {...state, content: actions.payload.content};
        case types.SUCCESS:
            return {...state, message: actions.payload.message, success: true};
        case types.FAILED:
            return {...state, message: actions.payload.message};
        default:
            throw new Error();
    }
};

export {initialState, reducer}