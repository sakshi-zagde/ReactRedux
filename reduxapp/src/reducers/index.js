
//import combineReducers from redux 
import { combineReducers } from "redux";
import courses from './courseReducers';

const rootReducer = combineReducers(
     {courses}
);

//make it export ready to be used in the other files 
export default rootReducer;

