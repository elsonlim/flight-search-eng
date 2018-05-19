export default (state = false, action) => {
    switch(action.type) {
        case 'update_flight_type': 
            return action.payload;
        default:
            return state;
    }
};