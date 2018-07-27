import {SET_SUCCESS} from '../../constants/dispatch';
  
  const initialState = {
    componentList: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_SUCCESS:
        return Object.assign({}, state, {
          componentList: action.componentList
        });

      default:
        return state;
    }
  };