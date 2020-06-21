import * as creators from "./actionCreators";
import * as types from "./actionTypes";
import {CreatorsToActions} from "../../creatorToActions";

export type State = {
    name: string;
    isLoading: boolean;
    isInvalid: boolean;
    success: boolean;
}

type Actions = CreatorsToActions<typeof creators>


const initialState: State = {
    name: "",
    isLoading: false,
    isInvalid: false,
    success: false
};

const reducer = (state: State, actions: Actions) => {
    switch (actions.type) {
        case types.THROW_REQUEST:
            return {type: types.THROW_REQUEST, isLoading: true}
        case types.CHANGE_NAME:
            return {type: types.CHANGE_NAME, name: actions}
    }
};

export {initialState, reducer};