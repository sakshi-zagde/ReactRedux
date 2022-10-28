//Create a courseReducer function with input
    // - action + current state as an array
    // - updated state based on the input action
//Store will use the reducer method -- export
export default function courseReducer( state=[],action){
    switch (action.type) {
        // If any matched case is with the actions then perform the changes
        case 'CREATE_COURSE':
            // return the updated state with the course added in the store
            return [...state,Object.assign({},action.course)]
        // case 'DELETE_COURSE':
        //     return
        // OTherwise return the default state i.e., current state
        default:
            return state;
    }
}

