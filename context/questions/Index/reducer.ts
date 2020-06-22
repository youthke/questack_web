import * as creators from "./actionCreators";
import * as types from "./actionTypes";
import { CreatorsToActions } from "../../creatorToActions";
import {Question} from "../../../model/question";
import {Stack} from "../../../model/stack";

export type State = {
    stack: Stack
}

type Actions = CreatorsToActions<typeof creators>

const initialState: State = {
    stack: {
        id: "",
        name: "",
        questions: []
    }
};

const reducer = (state: State, actions: Actions) =>{
    switch (actions.type) {
        case types.SET_STACK:
            return {...state, stack: actions.payload.stack};
        default:
            throw new Error();
    }
};


export {initialState , reducer}