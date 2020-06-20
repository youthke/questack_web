import * as creators from "./actionCreators"
import * as types from "./actionTypes"
import {Stack} from "../../model/stack";
import {CreatorsToActions} from "../creatorToActions";

export type State = {
    stacks: Stack[]
}

type Actions = CreatorsToActions<typeof creators>

const initialState: State = {
    stacks: []
};

const reducer = (state: State, action: Actions) =>{
    switch (action.type) {
        case types.SET_STACKS:
            return {...state, stacks: action.payload.stacks}
        default:
            throw new Error();
    }
};

export {initialState, reducer}