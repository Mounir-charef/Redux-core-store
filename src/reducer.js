import {produce} from "immer";
import * as actions from "./actionTypes.js";

let lastId = 0;
export default function reducer(state= [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return produce(state, newState => {
                newState.push({
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                })
            })

        case actions.BUG_REMOVED:
            return produce(state, newState => {
                const index = newState.findIndex(bug => bug.id === action.payload.id);
                if(index !== -1) newState.splice(index, 1);
            })

        case actions.BUG_RESOLVED:
            return produce(state, newState => {
                const index = newState.findIndex(bug => bug.id === action.payload.id);
                if(index !== -1) newState[index].resolved = true;
            })

        default:
            return state;
    }
}