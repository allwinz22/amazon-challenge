export const initialState = {
    basket: [],
    user: null,
    totalPrice: 0,
};

// Selector
export const getBasketTotal = (basket) => {
    console.log(basket);
    return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
                totalPrice: state.totalPrice + action.item.price,
            };
        default:
            return state;
    }
};

export default reducer;
