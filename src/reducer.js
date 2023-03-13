export const initialState = {
    basket: [],
    user: null,
};

// Selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const newBasket = [...state.basket];
            const index = newBasket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            newBasket.splice(index, 1);
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;
