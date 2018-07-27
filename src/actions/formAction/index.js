import {SET_SUCCESS} from '../../constants/dispatch';

export const setFromComponent = (componentList) => {
    return dispatch => {
        dispatch(setComponentList(componentList));
    }
}

function setComponentList(componentList) {
    return {
        type: SET_SUCCESS,
        componentList
    }
}