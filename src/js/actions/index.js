import {GET_DATA} from "../constants/action-types";

export function getData() {
    return { type: GET_DATA, payload: {} };
}
//
// export function getData() {
//     return function(dispatch) {
//         return fetch("../data/Webdev_data2.json")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: "GET_DATA", payload: json });
//             });
//     };
// }