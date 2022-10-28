// Write a function to return the intial state and the root reducer
import { createStore } from "redux";
import rootReducer from "../reducers";
// Export the function
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState
    )
}
