// Reducer => a function that takes in the old state and an action => new state

const contextReducer = (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            // to delete you filter and copy all the items except the one with the id you want to remove
            const transactions = state.filter(
                transaction => transaction.id !== action.payload
            );
            return transactions;
        case "ADD_TRANSACTION":
            // adding the new element at the start since new transaction will pop up at the beginning of the list
            return [action.payload, ...state];
        default:
            return state;
    }
};
export default contextReducer;
