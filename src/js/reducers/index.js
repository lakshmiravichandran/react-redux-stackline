import {GET_DATA} from "../constants/action-types";
var payload = require('../../data/Webdev_data2.json');

const initialState = {
    stackLineData : payload[0]
};

function rootReducer (state = initialState, action) {
    if (action.type === GET_DATA){
        return Object.assign({}, state,
            //{stackLineData: state.stackLineData.concat(action.payload)
        {stackLineData: state.stackLineData
            });
    }
    return state;
}

export default rootReducer;