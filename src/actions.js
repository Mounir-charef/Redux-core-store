import * as actions from "./actionTypes.js";

export const bugAdded = description => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }
}
export const bugRemoved = id => {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: id
        }
    }
}

export const bugResolved = id => {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: id
        }
    }
}