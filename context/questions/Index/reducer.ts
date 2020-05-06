import * as creators from "./actionCreators";
import * as types from "./actionTypes";
import { CreatorsToActions } from "../../creatorToActions";
import {Question} from "../../../model/question";

export type State = {
    questions: Question[]
}

type Actions = CreatorsToActions<typeof creators>

const initialState: State = {
    questions: []
};

const reducer = (state: State, actions: Actions) =>{
    switch (actions.type) {
        case types.SET_QUESTIONS:
            return {...state, questions: actions.payload.questions}
        default:
            throw new Error();
    }
};


export {initialState , reducer}