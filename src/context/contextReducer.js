// Reducer => a function that takes in the old state and an action => new state

const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "DELETE_TRANSACTION":
            // to delete you filter and copy all the items except the one with the id you want to remove
            transactions = state.filter(
                transaction => transaction.id !== action.payload
            );

            localStorage.setItem("transactions", JSON.stringify(transactions));

            return transactions;
        case "ADD_TRANSACTION":
            // adding the new element at the start since new transaction will pop up at the beginning of the list
            transactions = [action.payload, ...state];
            localStorage.setItem("transactions", JSON.stringify(transactions));
            return transactions;
        default:
            return state;
    }
};
export default contextReducer;
